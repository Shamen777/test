import gql from 'graphql-tag';

const FEEDBACKS_QUERY = gql`
    query Feedbacks{
        feedbacks {
            id
            title
            description
            image{
                url
            }
        }
    }
`
export default FEEDBACKS_QUERY;