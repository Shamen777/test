import React from 'react';
import st from './header.module.css';
import {useLocation} from 'react-router-dom';
import img from './image/img.png'
import img_bg from './image/img_bg.png'
import logo from './image/logo.png'

const Header = () =>{
    let location = useLocation().pathname;
    let classN = 'header_' + location.replace(/[0-9 /]/g, '');
    return(
        <header className={classN}>
            {
                location === '/' &&
                <><img src={img} alt="img" className={st.index_bg}/><img src={logo} alt="img" className={st.logo}/></>
            }
            {
                location === '/categories' && 
                <><h1>Продукты</h1><p>Здесь вы можете найти всю необходимую продукцию</p></>
            }
            {
                location.match('/category/') && 
                <><h1>Продукты</h1><p>Здесь вы можете найти всю необходимую продукцию</p></>
            }
            {
                location.match('/product/') && 
                <><h1>Подробнее об этом продуктe</h1><p>Получите всю информацию о товаре, который вы можете приобрести уже сейчас</p></>
            }
            {
                location === '/about' && 
                <><h1>О нашей компании</h1><p>Здесь мы вам расскажем чем мы занимаемся, вы можете больше о нас узнать</p><img src={img_bg} alt="img"/></>
            }
            {
                location === '/news' &&
                <><h1>Наши новости</h1><p>Подписывайтесь на наши социальные сети, чтобы не пропустить новости</p></>
            }
            {
                location.match('/news/') &&
                <><h1>Подробнее...</h1><p>читайте дальше)</p></>
            }
            {
                location === '/contacts' && 
                <><h1>Наши контакты</h1><p>Вы можете написать, позвонить, и даже приезать за чашкой чая и обсудить наши дела</p></>
            }
            <img src={img_bg} alt="img"/>
        </header>
    )
}

export default Header;