import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const IMAGES = gql`
query home_search($property_id: String!) {
   home_search(property_id: $property_id){
    results {
      photos {
        href
      }
    }
  }
  listing {
		count,
		results {
			list_price,
			property_id,
		  primary_photo {
			href
			},
			description {
				type,
				beds,
				baths,
        lot_sqft,
				sqft
			}
			location {
				address {
					city,
					line,
					state
				}
			}
		}
	}
}
`

export const LISTING = gql`
query {
	listing {
		count,
		results {
			list_price,
			property_id,
		  primary_photo {
			href
			},
			description {
				type,
				beds,
				baths,
        lot_sqft,
				sqft
			}
			location {
				address {
					city,
					line,
					state
				}
			}
		}
	}
}
`

export const QUERY_SINGLE_LISTING = gql`
  query getSingleThought($thoughtId: ID!) {
    thought(thoughtId: $thoughtId) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;
