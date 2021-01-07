import React from 'react';
import './productList.css';
import {Link} from 'react-router-dom';
import BLOG_QUERY from '../queries/blog/blog';
import Query from '../query/query';


const Blog = () => {
    return (
        <div>
        <Query query={BLOG_QUERY} id={null}>
                    {({data: {blogs} }) => {
                        return(
                            <div className='blog_cards'>
                            {blogs && blogs.map(elem =>(
                                <Link to={`/product/${elem.id}`}  key={elem.id} className='card'>
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

export default Blog;