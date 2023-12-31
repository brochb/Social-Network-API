const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Please enter a valid email address'],
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// Create a virtual field to retrieve the length of the user's friends array field
// userSchema
//     .virtual('friendCount')
//     .get(function () {
//         return this.friends.length;
//     });

const User = model('User', userSchema);

// If you flip these two lines back and forth, the routes work but no seeds, and the other way the seeds work but not the routes.
module.exports = User;
module.exports = { User };