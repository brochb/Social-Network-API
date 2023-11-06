const { Thought } = require('../models/Thought');

const ThoughtController = {
    // Get all Thoughts
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },

    // Get a single thought by _id
    async getThoughtById(req, res) {
        try {
            const thoughtId = req.params.thoughtId;
            const thought = await Thought.findById(thoughtId);
            if (!thought) {
                return res.status(404).json({ message: 'Thought not found' });
            }
            res.json(thought);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },

    // Create a new Thought
    async createThought(req, res) {
        try {
            const thoughtData = req.body;
            const newThought = await Thought.create(thoughtData);
            res.json(newThought);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },

    // Update a single Thought by _id
    async updateThought(req, res) {
        try {
            const thoughtId = req.params.thoughtId;
            const updatedData = req.body;
            const updatedThought = await Thought.findByIdAndUpdate(thoughtId, updatedData, { new: true });
            if (!updatedThought) {
                return res.status(404).json({ message: 'Thought not found' });
            }
            res.json(updatedThought);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },

    // Delete a single Thought by _id
    async deleteThought(req, res) {
        try {
            const thoughtId = req.params.thoughtId;
            const deletedThought = await Thought.findByIdAndRemove(thoughtId);
            if (!deletedThought) {
                return res.status(404).json({ message: 'Thought not found' });
            }
            res.json({ message: 'Thought removed' });
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },
};

module.exports = ThoughtController;
