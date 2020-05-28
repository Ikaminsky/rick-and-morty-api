import { gql } from 'apollo-boost';

export const GET_CHARACTERS = gql`
    query GetChars($name: String!) {
        characters(page: 1, filter: {name: $name} ) {
        results {
            id
            name
            image
        }
        }
    }
`
