import SimplSchema from 'simpl-schema';

export default new SimplSchema({
    nickname: String,
    userId: String,
    text: String,
    createdAt: Date
});