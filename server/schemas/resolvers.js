const { AuthenticationError } = require('apollo-server-express');
const { User }  = require("../models");
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate("excercises");
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate("excercises");
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({_id: context.user._id }).populate("excercises");
            }
            throw new AuthenticationError("You need to be logged in");
        }
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user};
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('No user found with this email address');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
      
            return { token, user };
          },
          addExcercise: async (parent, { userID, name, muscle, difficulty, instructions }) => {
            User.findOneAndUpdate(
                { _id: userID },
                { $push: { excercises: 
                    { 
                        name: name, 
                        muscle: muscle, 
                        difficulty: difficulty, 
                        instructions: instructions
                    }}},
                { new: true }
            )
          }
    }
}

module.exports = resolvers;