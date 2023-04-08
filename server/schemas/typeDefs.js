const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        excercises: [String]!
    }

    type Excercise {
        _id: ID!
        muscle: String!
        difficulty: String!
        instructions: String!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        excercises: [Excercise]
        me: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addExcercise(user: ID!, name: String!, muscle: String!, difficulty: String!, instructions: String!): Excercise
    }
`;

module.exports = typeDefs;