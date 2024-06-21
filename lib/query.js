import { gql } from "@apollo/client";

// location filter query =========================>
export const GetAllstates = gql`
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
export const GetCityByState = gql`
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
  }
`;

export const GetAreaByCity = gql`
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

// All Listings query ============================>

export const GET_LISTING_BY_TYPE = gql`
  query GetListingsByTypes($type: String, $city: String) {
    getListingsByTypes(type: $type, city: $city) {
      code
      listings {
        _id
        listing_name
        category
        listing_image
        isClaimed
      }
    }
  }
`;

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

export const GET_ALL_CATEGORY = gql`
  query GetAllCategories {
    getAllCategories {
      code
      categories {
        _id
        category_name
       subcategories {
        _id
        subcategory_name
        tags
      }
      }
    }
  }
`;

export const GETLISTING = gql`
  query GetListing($id: ID!) {
    getListing(_id: $id) {
      code
      listing {
        _id
        user
        user_name
        listing_name
        phone_number
        whatsapp_number
        listing_email
        category
        listing_address
        website
        country
        city
        map_url
        listing_detail
        listing_image
        gallery_images
        cover_image
        youtube_link
        service_location
        service_provided {
          name
          image
        }
      }
    }
  }
`;

export const GET_LISTING_COUNT = gql`
  query Query($userId: ID!, $isEmployee: Boolean) {
    getListingCount(user_id: $userId, isEmployee: $isEmployee) {
      code
      success
      message
      count
    }
  }
`;

// User query =====================================>
export const GET_USER_DETAILS = gql`
  query Query($id: ID!) {
    getUser(_id: $id) {
      code
      success
      message
      user {
        _id
        name
        email
        mobile_number
        gender
        cover_image
      }
    }
  }
`;
