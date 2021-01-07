import React from 'react';
import st from './footer.module.css';
import facebook from './image/facebook.png';
import instagram from './image/instagram.png';
import twitter from './image/twitter.png';
import watsapp from './image/watsapp.png';

const Footer = () => {

    return (
        <footer className={st.footer}>
            <ul className={st.social_media}>
                <h4>Подписывайтесь на нас</h4>
                <li><a href="test"><img src={instagram} alt="sm"/></a></li>
                <li><a href="test"><img src={facebook} alt="sm"/></a></li>
                <li><a href="test"><img src={twitter} alt="sm"/></a></li>
                <li><a href="test"><img src={watsapp} alt="sm"/></a></li>
            </ul>
            <ul>
                <h4>Наша почта</h4>
                <li><a href="test">onesta_group@mail.ru</a></li>
                <li><a href="test">onesta_group.job@mail.ru</a></li>
                <li><a href="test">onesta_group.job@mail.ru</a></li>
            </ul>
            <ul>
                <h4>Наши контакты</h4>
                <li><a href="test">+996 (550) 217 110</a></li>
                <li><a href="test">+996 (550) 217 110</a></li>
                <li><a href="test">+996 (550) 217 110</a></li>
            </ul>
            <ul>
                <h4>Нас адрес</h4>
                <li><a href="test">Кыргызская Республика,<br/> г. Бишкек, ул. Гражданская 53, офис 307</a></li>
            </ul>
            <h5>Developed by <a href="https://iq.kg/" target="_blink">IQ</a></h5>
        </footer>
    )
}

export default Footer;