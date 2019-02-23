import {Mongo} from 'meteor/mongo';
import ChatSchema from './schema';

const Chat = new Mongo.Collection('chat');

Chat.attachSchema(ChatSchema);

export default Chat;