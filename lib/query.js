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
        user {
          _id
        }
        user_name
        listing_name
        phone_number
        whatsapp_number
        listing_address
        listing_image
        isClaimed
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

export const GET_USER_LISTINGS = gql`
  query GetUserListings($userId: ID!) {
    getUserListings(user_id: $userId) {
      code
      success
      message
      listings {
        createdAt
        _id
        user {
          _id
        }
        user_name
        listing_name
        phone_number
        whatsapp_number
        listing_email
        category
        subcategory
        listing_status
        listing_address
        website
        country
        city
        state
        area
        pincode
        listing_detail
        listing_image
        gallery_images
        cover_image
        approval
        createdBy {
          name
        }
        approval_by {
          role
          message
          approver_id
        }
        views
        createdBy {
          name
        }
        createdAt
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
        user {
          _id
        }
        user_name
        listing_name
        phone_number
        whatsapp_number
        listing_email
        category
        subcategory
        tags
        listing_status
        listing_address
        website
        country
        city
        state
        area
        pincode
        listing_detail
        listing_image
        gallery_images
        cover_image
        youtube_link
        map_url
        createdBy {
          name
        }
        service_provided {
          name
        }
        service_location
        offer {
          offer_name
          offer_image
          offer_description
          offer_amount
          offer_type
        }
        approval
        approval_by {
          approver_id
          message
          role
        }
        views
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

export const USER_FROM_LISTING = gql`
  query GetUser($id: ID!) {
    getUser(_id: $id) {
      code
      message
      success
      user {
        _id
        total_listing_count
        subscription {
          listing_limit
        }
        createdAt
      }
    }
  }
`;
