import {Chat} from '/db';
import {Meteor} from "meteor/meteor";

Meteor.publish('chat', function() {
    return Chat.find();
});