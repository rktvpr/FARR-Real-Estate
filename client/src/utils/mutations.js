import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const UPDATE_USER = gql`
mutation Mutation($username: String, $email: String, $phone: String, $address: String, $password: String) {
  updateUser(username: $username, email: $email, phone: $phone, address: $address, password: $password) {
    _id
    email
    username
    address
    phone
  }
}
`;

// Variables
// {
//   "username": null,
//   "email": null,
//   "address": null,
//   "phone": null,
//   "password": null
// }




