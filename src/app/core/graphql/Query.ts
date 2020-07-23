import gql from 'graphql-tag';

/*
    Esquema de consulta para pedir las páginas de la aplicación
    @param $slug: identificador de tipo slugify de la página
    @param $lang: Abreviación del idioma en el que se hará la consulta
*/
export const QUERYGENERAL = gql`
    query getPage($slug: String!, $lang: String!) {
        page(slug: $slug, lang: $lang )
    }
`;

/*
    Esquema de consulta para solicitar los idiomas disponibles de la app
*/
export const QUERYLANGUAGES = gql`
    query getLanguages {
        languages {
            name
            abbreviation
        }
    }
`;

/*
    Esquema de consulta para pedir las información general de las páginas (header, footer, menú principal)
    @param $lang: Abreviación del idioma en el que se hará la consulta
*/
export const QUERYINFOGENERAL = gql`
    query getInfoGeneral($lang: String) {
        general_info(lang: $lang)
    }
`;

/*
    Esquema de consulta para pedir la información de la página de contacto
    @param $lang: Abreviación del idioma en el que se hará la consulta
*/
export const QUERYCONTACT = gql`
    query getContact($lang: String) {
        contact(lang: $lang)
    }
`;
