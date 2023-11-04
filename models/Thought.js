const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
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
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Reaction',
        },
    ],
});

// Create a virtual field to retrieve the length of the thought's reactions array field
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;