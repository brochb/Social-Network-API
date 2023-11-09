const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const reactionSchema = new Schema({
    reactionId: Schema.Types.ObjectId,
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    username: {
        type: String,
        unique: false,
        default: 'anon',
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

// If you flip these two lines back and forth, the routes work but no seeds, and the other way the seeds work but not the routes.
module.exports = Reaction;
module.exports = { Reaction };