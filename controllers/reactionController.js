const { Reaction } = require('../models/Reaction');

const ReactionController = {
    async getReactions(req,res) {
        try {
            const reactions = await Reaction.find();
            res.json(reactions);
        } catch (err) {
            console.error(err)
            res.status(500).json(err);
        }
    },
    
    // async getReactionById(req, res) {

    //     // GET
    //     // Logic to get a single reaction by _id
    // },

    // async createReaction(req, res) {
    //     // POST
    //     // Logic to create a new reaction
    // },

    // async updateReaction(req, res) {
    //     // PUT
    //     // Logic to update a single reaction by _id
    // },

    // async deleteReaction(req, res) {
    //     try {
    //         const { reactionId } = req.params;

    //         // Implement logic to find and remove the reaction by reactionId
    //         // Example:
    //         const removedReaction = await Reaction.findByIdAndRemove(reactionId);

    //         if (!removedReaction) {
    //             return res.status(404).json({ message: 'Reaction not found' });
    //         }

    //         res.json({ message: 'Reaction removed' });
    //     } catch (err) {
    //         console.error(err);
    //         res.status(500).json(err);
    //     }
    // },
};

module.exports = ReactionController;
