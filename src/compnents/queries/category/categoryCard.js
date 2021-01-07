import gql from 'graphql-tag';

const CATEGORY_CARD_QUERY = gql`
    query Categories($id: ID!) {
        category(id: $id){
            name
            blogs{
                id
                name
                description
                info
                img{
                    url
                }
            }
        }
    }
`

export default CATEGORY_CARD_QUERY;