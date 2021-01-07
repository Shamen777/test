import gql from 'graphql-tag';

const CATEGORY_QUERY = gql`
    query Categories {
        categories{
            id
            title
            image{
                url
            }
          }
    }
`

export default CATEGORY_QUERY;