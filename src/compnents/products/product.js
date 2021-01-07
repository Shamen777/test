import React from 'react';
import { useParams } from 'react-router';
import Query from '../query/query';
import st from './product.module.css';
import { Link } from 'react-router-dom';
import PRODUCT_CARD_QUERIES from '../queries/product/productCard';

const ProductCard = () => {
    let { id } = useParams();
    return (
        <Query query={PRODUCT_CARD_QUERIES} id={id}>
            {({ data: { product } }) => {
                return (
                    <section className={st.product_container}>
                        <div className={st.left_container}>
                            <img src={'http://localhost:1337' + product.image.url} alt="img"></img>
                        </div>
                        <div className={st.right_container}>
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <Link to="/categories" className={st.go_back_btn}>Посмотреть все товары</Link>
                            <Link to="/contacts" className={st.contact_btn}>Связаться с нами</Link>
                        </div>
                    </section>
                )
            }}
        </Query>
    )
}

export default ProductCard;