import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Users } from '../../../../db/users/collection';
import { Redirect } from 'react-router';
import { AutoForm, AutoField, ErrorsField } from 'uniforms-unstyled';
import createHistory from 'history/createBrowserHistory';
import SimpleSchema from 'simpl-schema';

export default class Nickname extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: ''
        };
    }

    handleNickname = (data) => {
        const history = new createHistory();
        const newNickname = data.nickname;
        if (Meteor.userId()) {
            Meteor.call('user.getNickname', Meteor.userId(), (err, nickname) => {
                if (!err) {
                    if (!nickname) {
                        Meteor.call('user.setNickname', Meteor.userId(), newNickname);
                        this.setState({
                            result: "Setting Nickname succesful!"
                        });
                        <Redirect to="/messages" />
                    }
                    else {
                        this.setState({
                            result: "You already have a nickname"
                        });
                    }
                }
            });
        }

    };

    render() {
        return (
            <div>
                <AutoForm onSubmit={this.handleNickname} schema={NickNameSchema}>
                    Set Your Nickname: <br />
                    <AutoField name="nickname" />
                    <p>{this.state.result}</p>
                    <button type="submit" > Set Nickname </button>
                </AutoForm>
            </div>
        )
    }
}

const NickNameSchema = new SimpleSchema({
    nickname: String
});