import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
query Query($searchKeyword: String, $orderDirection: OrderDirection, $orderBy: AllRepositoriesOrderBy, $after: String, $first: Int) {
  repositories(searchKeyword: $searchKeyword, orderDirection: $orderDirection, orderBy: $orderBy, after: $after, first: $first) {
    edges {
      node {
        id
        fullName
        ratingAverage
        reviewCount
        stargazersCount
        forksCount
        ownerAvatarUrl
        description
        language
      }
    }
    pageInfo {
      endCursor
      startCursor
      hasNextPage
    }
  }
}
`
export const GET_ME = gql`
    query Query {
        me {
            id
            username
        }
    }
`

export const GET_SINGLE_REPOSITORY = gql`
    query Query($repositoryId: ID!) {
  repository(id: $repositoryId) {
    id
    fullName
    url
    description
    language
    forksCount
    stargazersCount
    ratingAverage
    reviewCount
    ownerAvatarUrl
  }
}
`

export const GET_REVIEWS = gql`
query Query($repositoryId: ID!, $first: Int, $after: String) {
  repository(id: $repositoryId) {
    id
    fullName
    reviews(first: $first, after: $after) {
      totalCount
      edges {
        cursor
        node {
          id
          text
          rating
          createdAt
          repositoryId
          user {
            id
            username
          }
        }
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
}
`

