import {Meteor} from 'meteor/meteor'
import {Users, Chat} from '/db';

Meteor.methods({
    'user.register' (data) {
        const user = Users.findOne({'emails.0.address': data.email});

        if (user) {
            throw new Meteor.Error(500, 'email_already_taken',
                'Email already taken');
        }

        Accounts.createUser({
            email: data.email,
            password: data.password
        });
    },
    'user.getNickname' (_id) {
        return Users.findOne({
            _id
        }).nickname;
    },
    'user.setNickname' (_id, nickname) {
        console.log(nickname);
        Users.update({
            _id
        }, {$set : {nickname : nickname}});
    },
    'chat.addNewMessage' (_id, nickname, text) {
        Chat.insert({
            userId : _id,
            nickname: nickname,
            text: text,
            createdAt: new Date()
        });
    }
});