import React from 'react';
import AddMessage from './AddMessage';
import MessageList from './MessageList';

export default class Messages extends React.Component {
    render() 
    {
        return (
            <div>
                <MessageList />
                <AddMessage />
            </div>
        );
    }
}