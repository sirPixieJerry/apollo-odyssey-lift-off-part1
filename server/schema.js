const { gql } = require("apollo-server");

const typeDefs = gql`
  "The actual Query"
  type Query {
    tracksForHome: [Track!]!
  }

  type Author {
    id: ID!
    name: String!
    photo: String
  }

  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    moduleCount: Int
  }
`;

module.exports = typeDefs;
