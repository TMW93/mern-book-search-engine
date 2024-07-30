import {gql} from '@apollo/client';

export const ADD_USER = gql `
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser($username: String!, $email: String!, $password: String!) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql `
  mutation login($email: String!, $password: String!) {
    login($email: String!, $password: String!) {
      token
      user {
        _id
        username
      }
    }
  }
`;