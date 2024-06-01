import { gql } from "@apollo/client";

// location filter query
export  const GetAllstates = gql`
query GetAllStates {
    getAllStates {
        code
        states {
            _id
            name
            type
            code
        }
    }
}
`;
export  const GetCityByState = gql`
query GetCityByState($getCityByStateId: String) {
    getCityByState(id: $getCityByStateId) {
        code
        success
        cities {
            _id
            name
        }
    }
}

`;
export const GetStateByCity = gql`
query GetStateByCity($city: String!) {
    getStateByCity(name: $city) {
        code
      city {
        name
        state {
          name
          _id
        }
      }
    }
  }`;

export  const GetAreaByCity = gql`
query GetAreasByCity($cityId: String) {
    getAreasByCity(id: $cityId) {
        code
        success
        message
        areas {
            _id
            name
        }
    }
}

`;

// All Listings query

export const getListingByType = gql`
query GetListingsByTypes($type:String,$city: String) {
    getListingsByTypes(type: $type, city: $city) {
        code
        listings {
            _id
            listing_name
            category
            listing_image
        }
    }
}
`;
