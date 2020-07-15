import gql from 'graphql-tag';

export const QUERYGENERAL = gql`
    query getPage($slug: String!, $lang: String!) {
        page(slug: $slug, lang: $lang )
    }
`;

export const QUERYLANGUAGES = gql`
    query getLanguages {
        languages {
            name
            abbreviation
        }
    }
`;
