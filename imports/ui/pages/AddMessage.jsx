import React from 'react';
import { Meteor } from 'meteor/meteor';

export default class AddMessage extends React.Component {

    handleSubmit(e) {
        e.preventDefault();

        const text = this.refs.Message.value;
        console.log(text);
        if (!Meteor.userId) {
            alert("Not logged in!");
        }
        else {
            Meteor.call('user.getNickname', Meteor.userId(), (err, nickname) => {
                if (!err) {
                    if (!nickname) {
                        alert(" Nickname not set!");
                    }
                    else {
                        Meteor.call('chat.addNewMessage', Meteor.userId(), nickname, text);
                    }
                }
            });
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" name="Message" ref="Message" placeholder="Type your message here" />
                    <br />
                    <button >Add Message</button>
                </form>
            </div>
        )
    }
}