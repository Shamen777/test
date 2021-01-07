import React from 'react';
import {Link} from 'react-router-dom';
import NEWS_QUERY from '../queries/news/news';
import Query from '../query/query';

const NewsList = () =>{

    return(
        <div>
            <Query query={NEWS_QUERY} id={null}>
                    {({data: {products} }) => {
                        return(
                            <div className='blog_cards'>
                            {products && products.map(elem =>(
                                <Link to={`/news/${elem.id}`}  key={elem.id} className='card'>
                                    <h3>{elem.name}</h3>
                                    <p>{elem.description}</p>
                                    <img src={'http://localhost:1337' + elem.img.url} alt="img"></img>
                                </Link>
                            ))}
                        </div>
                        )
                    }}
                </Query>
        </div>
    )
}

export default NewsList;