import faker from 'faker';
import Users from '/db/users/collection';

Meteor.startup(() => {
    if(Users.find({}).count()==0)
        {
            for(let i=1;i<=1;i++)
            {
                const _id = Accounts.createUser({
                    email: faker.internet.email(),
                    createdAt: new Date(),
                    // nickname: faker.internet.email()
                    // password: 12
                });
                Accounts.setPassword(_id,'12345');
                // Users.update({_id},{$set: {nickname: faker.name.findName()}});
            }
        }
});