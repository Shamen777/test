import React from 'react';
import {useParams} from 'react-router';
import Query from '../query/query';
import NEWS_CARD_QUERIES from '../queries/news/newsCard';

const NewsCard = () =>{
    let { id } = useParams();

    return(
        <Query query={NEWS_CARD_QUERIES} id={id}>
            {({data : {product} }) =>{
                return (
                    <div className="blog_card_intro">
                        <img src={'http://localhost:1337' + product.img.url} alt="img"></img>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                    </div>
                )
            }}
        </Query>
        
    )
}

export default NewsCard;