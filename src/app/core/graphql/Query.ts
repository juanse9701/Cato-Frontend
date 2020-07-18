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

/* cambiar a recibir lenguaje dinamico */
export const QUERYINFOGENERAL = gql`
    query getInfoGeneral {
        general_info(lang: "ES")
    }
`;
