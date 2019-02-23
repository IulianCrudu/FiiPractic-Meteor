import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Users} from '../../../../db/users/collection';
import { AutoForm, AutoField, ErrorsField } from 'uniforms-unstyled';
import SimpleSchema from 'simpl-schema';

export default class Nickname extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: 'wtf'
        };
    }

    handleNickname = (data) => {
        data.preventDefault();
        console.log(data);
        const newNickname = this.refs.nickname.value.trim();
        if(Meteor.userId())
            {
                Meteor.call('user.getNickname' , Meteor.userId() , (err,nickname) => {
                    if(!err) {
                        if(!nickname) {
                            Meteor.call('user.setNickname' , Meteor.userId(), newNickname);
                            // this.setState.result = "Setting Nickname succesful!";
                            this.setState({
                                result:  "Setting Nickname succesful!"
                            });
                        }
                        else {
                            // this.state.result = "You already have a nickname";
                            this.setState({
                                result: "You already have a nickname"
                            });
                        }
                    }
                });
            }
        console.log(newNickname);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleNickname.bind(this)}>
                    Set Your Nickname: <br />
                    <input type='text' name="nickname" ref="nickname" /> 
                    <br />
                    <p>{this.state.result}</p>
                    <br/>
                    <input type="submit" />
                </form>
            </div>
    )
}
}