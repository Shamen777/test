import React from 'react';
import st from './footer.module.css';
import facebook from '../../content/facebook.png';
import twitter from '../../content/twitter.png'

const Footer = () =>{

    return(
        <footer>
            <ul className={st.contact_number}>
                <span className={st.title}>Контактные номера</span>
                <li><a href="http://google.com">0 (550) 217 110</a></li>
                <li><a href="http://google.com">0 (550) 217 110</a></li>
                <li><a href="http://google.com">0 (550) 217 110</a></li>
            </ul>
            <div className={st.adress_email}>
                <span className={st.title}>Адрес</span>
                <span className={st.adress}>Кыргызская Республика, г. Бишкек, ул. Гражданская 53, офис 307</span>
                <span className={st.title}>Почта</span>
                <span><a href="http://vk.com">onesta_group@mail.ru</a></span>
            </div>
            <div className={st.social}>
                <img src={facebook} alt="img" />
                <img src={twitter} alt="img" />
                <span>Все права защищены 2017. Onesta Group</span>
            </div>
        </footer>
    )
}

export default Footer;