const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAt) => dateFormat(createdAt),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Reaction',
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

// Create a virtual field to retrieve the length of the thought's reactions array field
// thoughtSchema
//     .virtual('reactionCount')
//     .get(function () {
//         return this.reactions.length;
//     });

const Thought = model('Thought', thoughtSchema);

// If you flip these two lines back and forth, the routes work but no seeds, and the other way the seeds work but not the routes.
module.exports = Thought;
module.exports = { Thought };