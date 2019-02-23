import React from 'react';
import dateformat from 'dateformat';

export default class Message extends React.Component {
    render() {
        return (
            <div>
                <p>{dateformat(this.props.date,"m mmmm hh:MM")} , {this.props.nickname} : {this.props.text}</p>
            </div>
        );
    }
}