const { User } = require('../models/User');

// Get all users
const UserController = {
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },

    // // Get a single user by _id and populate thoughts and friends
    // async getUserById(req, res) {
    //     // GET
    //     // Logic to get a single user by _id and populate thoughts and friends
    // },

    // // Create a new user
    // async createUser(req, res) {
    //     // POST
    //     // Logic for creating a new user
    // },

    // // Update a user by _id
    // async updateUser(req, res) {
    //     // PUT
    //     // Logic to update a single user by _id
    // },

    // // Delete a user by _id
    // async deleteUser(req, res) {
    //     // DELETE
    //     // Logic to delete a single user by _id
    // },
};

module.exports = UserController;
