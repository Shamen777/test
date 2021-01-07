import gql from 'graphql-tag';

const PRODUCT_QUERY = gql`
    query Products{
        products {
            id
            title
            description
            image{
                url
            }
        }
    }
`
export default PRODUCT_QUERY;