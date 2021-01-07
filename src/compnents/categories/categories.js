import React from 'react';
import Query from '../query/query';
import { Link } from 'react-router-dom';
import CATEGORY_QUERY from '../queries/category/category';
import PRODUCT_QUERY from '../queries/product/product';
import st from './category.module.css';


const Categories = () => {
    const search = (title) => {
        let product_card = document.querySelectorAll('#products_id a');
        product_card.forEach(elem => {
            elem.classList.add('hide_card')
            if (elem.childNodes[1].childNodes[0].innerHTML.toLowerCase().includes(title.toLowerCase())) {
                elem.classList.remove('hide_card');
            }
        })
    }

    return (
        <section>
            <div className={st.panel}>
                <Query query={CATEGORY_QUERY} id={null}>
                    {({ data: { categories } }) => {
                        return (
                            <div className={st.filter_elems}>
                                <Link to="/categories" className={st.filter_elem}><h3>Все продукты</h3></Link>
                                {categories && categories.map(elem => (
                                    <Link to={`/category/${elem.id}`} className={st.filter_elem} key={elem.id}>
                                        <h3>{elem.title}</h3>
                                    </Link>
                                ))}
                            </div>
                        )
                    }}
                </Query>
                <input placeholder='search' onKeyUp={e => search(e.target.value)}></input>
            </div>
            <div>
                <Query query={PRODUCT_QUERY} id={null}>
                    {({ data: { products } }) => {
                        return (
                            <div className={st.products} id="products_id">
                                {products && products.map(elem => (
                                    <Link to={`/product/${elem.id}`} className={st.product} key={elem.id}>
                                        <div className={st.img_container}>
                                            <img src={'http://localhost:1337' + elem.image[0].url} alt="img"></img>
                                        </div>
                                        <div className={st.text_container}>
                                            <h3 className='product_title'>{elem.title}</h3>
                                            <p>{elem.description}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )
                    }}
                </Query>
            </div>
        </section>
    )
}

export default Categories;