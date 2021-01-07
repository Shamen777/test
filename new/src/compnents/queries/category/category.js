import gql from 'graphql-tag';

const CATEGORY_QUERY = gql`
    query Products {
        products{
            id
            name
          }
    }
`

export default CATEGORY_QUERY;