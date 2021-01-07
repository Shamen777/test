import gql from 'graphql-tag';

const NEWS_QUERY = gql`
    query News{
        products {
            id
            name
            description
            img{
                url
            }
        }
    }
`
export default NEWS_QUERY;