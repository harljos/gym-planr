const { AuthenticationError } = require('apollo-server-express');
const { User }  = require("../models");

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate("excercises");
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate("excercises");
        }
    },
}

module.exports = resolvers;