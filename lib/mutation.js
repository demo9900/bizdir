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

