import gql from 'graphql-tag';

const NEWS_CARD_QUERIES = gql`
    query News($id: ID!) {
        news(id: $id) {
            id
            name
            description
            img{
                url
            }
        }
    }
`;

export default NEWS_CARD_QUERIES;