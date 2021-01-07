import gql from 'graphql-tag';

const PRODUCT_CARD_QUERIES = gql`
    query Products($id: ID!) {
        product(id: $id) {
            id
            title
            description
            image{
                url
            }
        }
    }
`;

export default PRODUCT_CARD_QUERIES;