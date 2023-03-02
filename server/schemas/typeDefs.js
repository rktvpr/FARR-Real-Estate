const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    
    username: String
    _id: ID
    email: String
    phone: String
    address: String

  }

  type ListingResult {
  count: Int
  results: [PropertyResult]
}

type Region {
  name: String
  _id: ID
}

  type PropertyResult {
  list_price: Int
  property_id: String
  primary_photo: Photo
  location: Location
 description: ListingDescription
}

type Location {
  address: Address
  description: ListingDescription
}

type Address {
  city: String
  line: String
  state: String
}

type HomePhoto {
  href: String!
}

type SearchHome {
  property_id: String!
  listing_id: Int!
  photos: [HomePhoto!]!
}

type SearchHomeResult {
  list_price: Int!
  description: ListingDescription
  location: Location
  photos: [Photo]
}
type ListingDescription {
  type: String
  beds: Int
  baths: Int
  lot_sqft: Int
  sqft: Int
}

type Photo {
  href: String
}

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    listing(zip: String!): ListingResult
    listings: ListingResult
    home_search(property_id: String!): SearchHomeResult!
    searchRegion(name: String!, sortName: Int): [Region]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    updateUser( username: String, email: String, phone: String, address: String, password: String): User
    # addThought(thoughtText: String!): Thought
    # addComment(thoughtId: ID!, commentText: String!): Thought
    # removeThought(thoughtId: ID!): Thought
    # removeComment(thoughtId: ID!, commentId: ID!): Thought
  }
  
`;

module.exports = typeDefs;
