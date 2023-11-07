const { Schema, model } = require('mongoose');

const reactionSchema = new Schema({
    reactionId: Schema.Types.ObjectId,
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAt) => dateFormat(createdAt),
    },
},
    {
        toJSON: {
            virtuals: true,

        },
        id: false,
    }
);

const Reaction = model('Reaction', reactionSchema);

module.exports = Reaction;