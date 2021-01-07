import gql from 'graphql-tag';

const BLOG_CARD_QUERIES = gql`
    query Blogs($id: ID!) {
        blog(id: $id) {
            id
            name
            description
            img{
                url
            }
        }
    }
`;

export default BLOG_CARD_QUERIES;