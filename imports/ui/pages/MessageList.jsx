import React from 'react';
import {Chat} from '/db';
import {withTracker} from 'meteor/react-meteor-data';
import dateformat from 'dateformat';
import Message from './Message';

class MessageList extends React.Component {
    constructor() {
        super();
    }

    render() {
        // const {chats} = this.props;
        console.log(this.props.loading);
        return(
        <div>
            <p>Your Messages:</p>
            {
                this.props.chat.map((onechat) => {
                    return (
                        
                        <div key={onechat._id}>
                        <p>{dateformat(onechat.createdAt,"dd mmmm hh:MM")} , {onechat.nickname} : {onechat.text}</p>
                        </div>
                    )
                })
            }
        </div>)

    }
}

export default withTracker(props => {

    const handle = Meteor.subscribe('chat');
    console.log(handle);
    return {
        loading: !handle.ready(),
        chat: Chat.find().fetch(),
        ...props
    };
})(MessageList);