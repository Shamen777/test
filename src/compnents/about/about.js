import React from 'react';
import st from './about.module.css';
import star from './image/star.svg';
import logo from './image/logo.jpg';


const About = () => {
    return (
        <div>
            <section>
                <h2>О компании</h2>
                <div className={st.about_container}>
                    <div className={st.about_header}>
                        <div className={st.about_box}>
                            <h4>КАЧЕСТВЕННЫЙ И УСПЕШНЫЙ ГОТОВЫЙ ПРОДУКТ, МОЖЕТ БЫТЬ ИЗГОТОВЛЕН ТОЛЬКО С ИСПОЛЬЗОВАНИЕМ КАЧЕСТВЕННЫХ ИНГРЕДИЕНТОВ»</h4>
                        </div>
                        <div className={st.about_box}>
                            <p>Компания «Onesta Group» - дистрибьютерская компания по поставке ингредиентов для пищевых промышленных предприятий.</p>
                        </div>
                        <div className={st.about_box}>
                            <p>Мы стремимся к улучшению качества и постоянному расширению сфер своих услуг и ассортимента продукции.</p>
                        </div>
                    </div>
                    <div className={st.about_main}>
                        <div className={st.about_box}>
                            <div className={st.about_box_title}>
                                <img src={star} alt="img"/>
                                <h4>ГАРАНТИРОВАНО ВЫСОКОЕ КАЧЕСТВО</h4>
                            </div>
                            <p>Продукция, представленная нашей компанией, сертифицирована, что подтверждается всеми необходимыми документами</p>
                        </div>
                        <div className={st.about_box}>
                            <div className={st.about_box_title}>
                                <img src={star} alt="img"/>
                                <h4>ГИБКАЯ ЦЕНОВАЯ ПОЛИТИКА, РАЗЛИЧНЫЕ СХЕМЫ ОПЛАТЫ</h4>
                            </div>
                            <p>Идеальное соотношение цены и качества. Мы точно знаем, как сделать сотрудничество взаимовыгодным.</p>
                        </div>
                        <div className={st.about_box}>
                            <div className={st.about_box_title}>
                                <img src={star} alt="img"/>
                                <h4>ШИРОКИЙ АССОРТИМЕНТ</h4>
                            </div>
                            <p>Ассортимент предлагаемой продукции широк, а также предоставляем разработку оригинальных и эксклюзивных продуктов и рецептур по индивидуальному запросу клиента.</p>
                        </div>
                        <div className={st.about_box}>
                            <div className={st.about_box_title}>
                                <img src={star} alt="img"/>
                                <h4>ИННОВАЦИЯ</h4>
                            </div>
                            <p>Постоянный обмен информацией с зарубежными технологами, постоянный поиск новых подходов к решению задач, позволяет нам иметь доступ к новейшим технологиям, тенденциям мирового рынка пищевой промышленности.</p>
                        </div>
                        <div className={st.about_box}>
                            <img src={logo} alt="img" className={st.about_box_img}/>
                        </div>
                        <div className={st.about_box}>
                            <div className={st.about_box_title}>
                                <img src={star} alt="img"/>
                                <h4>СТАБИЛЬНОСТЬ РАБОТЫ</h4>
                            </div>
                            <p>Наши сотрудники компетентны и мотивированы на обеспечение высококачественного обслуживания.</p>
                        </div>
                    </div>
                    <div className={st.about_footer}>
                        <p>Компания «Onesta Group» обеспечит каждого клиента как ингредиентами, так и комплексной технологической поддержкой.</p>
                        <p>Мы предлагаем только сертифицированную, высококачественную продукцию.</p>
                        <h4>МЫ ЗА ДОЛГОЕ И ВЗАИМОВЫГОДНОЕ СОТРУДНИЧЕСТВО!</h4>
                    </div>
                </div>
            </section>
            <section>
                <h2>Наши партнеры</h2>
                <div className={st.partners_container}>
                    <div className={st.partner_card}>
                        <img src="https://iamjustkhan.github.io/bloo/content/icons/S7.svg" alt="img"></img>
                        <span>S7</span>
                    </div>
                    <div className={st.partner_card}>
                        <img src="https://iamjustkhan.github.io/bloo/content/icons/Yota_v2.svg" alt="img"></img>
                        <span>Yota</span>
                    </div>
                    <div className={st.partner_card}>
                        <img src="https://iamjustkhan.github.io/bloo/content/icons/S7.svg" alt="img"></img>
                        <span>S7</span>
                    </div>
                    <div className={st.partner_card}>
                        <img src="https://iamjustkhan.github.io/bloo/content/icons/Yota_v2.svg" alt="img"></img>
                        <span>Yota</span>
                    </div>
                    <div className={st.partner_card}>
                        <img src="https://iamjustkhan.github.io/bloo/content/icons/S7.svg" alt="img"></img>
                        <span>S7</span>
                    </div>
                    <div className={st.partner_card}>
                        <img src="https://iamjustkhan.github.io/bloo/content/icons/Yota_v2.svg" alt="img"></img>
                        <span>Yota</span>
                    </div>
                    <div className={st.partner_card}>
                        <img src="https://iamjustkhan.github.io/bloo/content/icons/S7.svg" alt="img"></img>
                        <span>S7</span>
                    </div>
                    <div className={st.partner_card}>
                        <img src="https://iamjustkhan.github.io/bloo/content/icons/Yota_v2.svg" alt="img"></img>
                        <span>Yota</span>
                    </div>
                    <div className={st.partner_card}>
                        <img src="https://iamjustkhan.github.io/bloo/content/icons/S7.svg" alt="img"></img>
                        <span>S7</span>
                    </div>
                    <div className={st.partner_card}>
                        <img src="https://iamjustkhan.github.io/bloo/content/icons/Yota_v2.svg" alt="img"></img>
                        <span>Yota</span>
                    </div>
                </div>
            </section>
            <section>
                <h2>Наши сервисы</h2>
                <div className={st.services_container}>
                    <div className={st.services_card}>
                        <div>
                            <h4>Качество</h4>
                            <p>Мы поставляем продукцию высшего качества, изготовленную по мировым стандартам.</p>
                        </div>
                    </div>
                    <div className={st.services_card}>
                        <div>
                            <h4>Консультация</h4>
                            <p>Специалисты нашей компании всегда окажут все необходимые консультации по использованию продукции.</p>
                        </div>
                    </div>
                    <div className={st.services_card}>
                        <div>
                            <h4>Доступность</h4>
                            <p>Мы предлагаем лучшее соотношение цены и качества.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>


    )
}

export default About;