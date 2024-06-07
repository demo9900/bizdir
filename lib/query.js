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
// queries.js

export const GET_FILTERED_LISTING = gql`
  query GetFilteredListing($filters: Filters) {
    getFilteredListing(filters: $filters) {
      code
      success
      message
      listings {
        _id
        user
        user_name
        listing_name
        phone_number
        whatsapp_number
        listing_address
        listing_image
        views
      }
    }
  }
`;

export const GET_ALL_CITY = gql`
query GetAllCity {
    getAllCity {
        code
        cities {
            name
        }
    }
}
`;
export const GET_ALL_CATEGORY = gql`
query GetAllCategories {
    getAllCategories {
        categories {
            _id
            category_name
            subcategory
        }
    }
}

`;
