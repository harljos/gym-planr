const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Excercise {
        name: String!
        muscle: String!
        difficulty: String!
        instructions: String!
    }

    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        excercises: [Excercise]!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        user(username: String!): User
        me: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addExcercise(user: ID!, name: String!, muscle: String!, difficulty: String!, instructions: String!): User
    }
`;

module.exports = typeDefs;