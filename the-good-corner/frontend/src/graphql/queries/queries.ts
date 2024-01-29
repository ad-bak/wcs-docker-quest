import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query GetAllUsers {
    getAllUsers {
      email
      id
    }
  }
`;

export const GET_ALL_CATEGORIES = gql`
  query AllCategories {
    allCategories {
      id
      name
    }
  }
`;

export const LOGIN = gql`
  query Query($userData: UserInput!) {
    login(UserData: $userData)
  }
`;

export const GET_AUTH_INFO = gql`
  query WhoAmI {
    whoAmI {
      isLoggedIn
      email
      role
    }
  }
`;
