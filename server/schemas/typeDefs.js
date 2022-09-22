const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Category {
    _id: ID
    name: String
  }

  type Customize {
    size: String
    brand: String
    color: String
  }
  
  type Clothes {
    _id: ID
    name: String
    description: String
    image: String
    price: Float
    category: Category
    customize: [Customize]
  }

  type Order {
    _id: ID
    purchaseDate: String
    clothes: [Clothes]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    categories: [Category]
    clothes(category: ID, name: String): [Clothes]

    user: User
    order(_id: ID!): Order
    checkout(clothes: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(clothes: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateClothes(_id: ID!, quantity: Int!): Clothes
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;