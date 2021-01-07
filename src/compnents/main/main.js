import { Link } from 'react-router-dom';
import Query from '../query/query';
import st from './main.module.css';
import about from './image/Logo-onesta-group-1024x828.jpg'
import other_project from './image/other_project.jpg';
import other_project1 from './image/other_project1.jpg';
import CATEGORY_QUERY from '../queries/category/category';
import FEEDBACKS_QUERY from '../queries/feedbacks/feedbacks';

const Main = () => {
    return (
        <div>
            <section className={st.projects_section}>
                <h2>Наши Ингредиенты</h2>
                <div className={st.project_items}>
                    <a href="project" className={st.project_item}>
                        <div className={st.img_container}>
                            <img src={other_project} alt="img"></img>
                        </div>
                        <div className={st.text_container}>
                            <p>Ингредиенты для молочных изделий, например здесь может быть краткое описание для чего это может понадобится</p>
                            <h4>Молочное производство</h4>
                            <div className={st.arrow}><span></span></div>
                        </div>
                    </a>
                    <a href="project" className={st.project_item}>
                        <div className={st.img_container}>
                            <img src={other_project1} alt="img"></img>
                        </div>
                        <div className={st.text_container}>
                            <p>Ингредиенты для молочных изделий, например здесь может быть краткое описание для чего это может понадобится</p>
                            <h4>Домашняя кулинария</h4>
                            <div className={st.arrow}><span></span></div>
                        </div>
                    </a>
                </div>
            </section>
            <section className={st.about_section}>
                <div className={st.about_container}>
                    <div className={st.text_container}>
                        <h2>Мы рады видеть вас!</h2>
                        <h4>Немножко о нас вы можете прочитать здесь, а еще вы можете связаться с нами</h4>
                        <p>Наша компания ориентирована на специалистов молочной отрасли. В списке предлагаемых нами продуктов
                        имеется полный набор <Link to='/product'>лиофилизированных бактериальных культур</Link>, компонентов для различных видов <Link to='/product'>молочной продукции</Link>.</p>
                        <p>Надеемся, что наш сайт поможет специалистам пищевых производств сориентироваться в широком спектре
                        <Link to='/product'> продукции</Link>, предлагаемой сегодня в Кыргызстане, а также сделать правильный выбор в пользу
                            исторических лидеров-производителей.</p>
                        <Link to='/about' className={st.link}>Подробнее</Link>
                    </div>
                    <div className={st.img_container}>
                        <img src={about} alt="img"></img>
                    </div>
                </div>
            </section>
            <section className={st.categories_section}>
                <h2>Наши продукты</h2>
                <Query query={CATEGORY_QUERY} id={null}>
                    {({ data: { categories } }) => {
                        return (
                            <div className={st.categories}>
                                {categories && categories.map(elem => (
                                    <div className={st.category} key={elem.id}>
                                        <Link to={`/category/${elem.id}`} className='card'>
                                            <div className={st.img_container}>
                                                <img src={'http://localhost:1337' + elem.image.url} alt="img"></img>
                                            </div>
                                            <div className={st.text_container}>
                                                <h5>{elem.title}</h5>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        )
                    }}
                </Query>
                <Link to='/categories' className={st.link}>Все продукты</Link>
            </section>
            <section className={st.categories_section}>
                <h2>Отзывы</h2>
                <Query query={FEEDBACKS_QUERY} id={null}>
                    {({ data: { feedbacks } }) => {
                        return (
                            <div>
                                {feedbacks && feedbacks.map(elem => (
                                    <div key={elem.id}>
                                        <div className={st.img_container}>
                                            <img src={'http://localhost:1337' + elem.image.url} alt="img"></img>
                                        </div>
                                        <div className={st.text_container}>
                                            <h5>{elem.title}</h5>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )
                    }}
                </Query>
                <Link to='/categories' className={st.link}>Все продукты</Link>
            </section>
        </div>
    )
}

export default Main;