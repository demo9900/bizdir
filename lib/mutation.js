import { gql } from "@apollo/client";

export const CREATE_CLAIM_REQUEST = gql`
mutation NewClaimRequest($data: ClaimRequestData!) {
  newClaimRequest(data: $data) {
    code
    message
    success
  }
}
`;

export const LOGIN_USER = gql`
mutation LoginUser($email: String!, $password: String!) {
  loginUser(email: $email, password: $password) {
    code
    message
    user {
      token
      image
      is_verified
      email
      name
      id
    }
  }
}`;

export const CREATE_LISTING = gql`
mutation CreateListing($data: ListingData!) {
  createListing(data: $data) {
    code
    success
    message
  }
}
`;


