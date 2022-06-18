import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
    query Query {
        repositories {
            edges {
                node {
                    id
                    fullName
                    description
                    language
                    forksCount
                    stargazersCount
                    ratingAverage
                    reviewCount
                    ownerAvatarUrl
                }
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

