import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
// import BLOG_QUERY from '../queries/blog/blog';
// import NEWS_QUERY from '../queries/news/news';
// import Query from '../query/query';
import st from './main.module.css';
import about from './image/Logo-onesta-group-1024x828.jpg'
import companyImg from './image/altri-prodotti-altri-coagulanti-genetico-uai-720x720.jpg';
import companyImg1 from './image//altri-prodotti-lipasi-lipasi-di-capretto-uai-720x720.jpg'
import {getCategories} from '../../redux/actions/actions';
import { useDispatch, useSelector } from "react-redux";


const Main = () =>{

    const dispatch = useDispatch();
    const categories = useSelector((state) => state.getCategories.data.data);
    console.log(categories);
    useEffect(() => {
        dispatch(getCategories());
    }, []);
    return(
        <div>
             <div className={st.projects_section}>
                <h2>Другие компании</h2>
                <div className={st.project_items}>
                    <a href="#" class={st.project_item}>
                        <div className={st.text_container}>
                            <h4>Name of company</h4>
                        </div>
                        <div className={st.img_container}>
                            <img src={companyImg} alt="img"></img>
                        </div>
                    </a>
                    <a href="#" className={st.project_item}>
                        <div className={st.text_container}>
                            <h4>Name of company</h4>
                        </div>
                        <div className={st.img_container}>
                            <img src={companyImg1} alt="img"></img>
                        </div>
                    </a>
                    <a href="#" className={st.project_item}>
                        <div className={st.text_container}>
                            <h4>Name of company</h4>
                        </div>
                        <div className={st.img_container}>
                            <img src={companyImg} alt="img"></img>
                        </div>
                    </a>
                    <a href="#" className={st.project_item}>
                        <div className={st.text_container}>
                            <h4>Name of company</h4>
                        </div>
                        <div className={st.img_container}>
                            <div className={st.plus}>+</div>
                        </div>
                    </a>
                </div>
            </div>
             <div class={st.about_section}>
                <h2>О нас</h2>
                <div class={st.about_container}>
                    <div class={st.text_container}>
                        <h4>Мы рады видеть вас!</h4>
                        <p>Наша компания ориентирована на специалистов молочной отрасли. В списке предлагаемых нами продуктов
                            имеется полный набор лиофилизированных бактериальных культур, компонентов для различных видов
                            молочной продукции.</p>
                        <p>Надеемся, что наш сайт поможет специалистам пищевых производств сориентироваться в широком спектре
                            продукции, предлагаемой сегодня в Кыргызстане, а также сделать правильный выбор в пользу
                            исторических лидеров-производителей.</p>
                        <Link to='/about'>Подробнее</Link>
                    </div>
                    <div class={st.img_container}>
                        <img src={about} alt="img"></img>
                    </div>
                </div>
            </div>
            <section>products
            {/* <Query query={BLOG_QUERY} id={null}>
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
                </Query> */}
            </section>
            <div>
                <div className='blog_cards'>
                <h2>News</h2>
                {categories && categories.map(elem =>(
                     <Link to={`/product/${elem.id}`}  key={elem.id} className='card'>
                         <h3>{elem.title}</h3>
                         <p>{elem.description}</p>
                         <img src={'http://localhost:1337'} alt="img"></img>
                     </Link>
                ))}
               </div>
            </div>
        </div>
    )
}

export default Main;