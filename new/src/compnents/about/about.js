import React from 'react';
import st from './about.module.css';
import milk from './image/milk.jpg';


const About = () =>{
    return(
        <div>
            <div className={st.about_main_block}>
                <h2>Certified by the Sadyk Keyn</h2>
                <h3>The largest and most perspective agency</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente possimus molestias et expedita ipsam.</p>
            </div>
            <div className={st.services_container}>
                <div className={st.services_card}>
                    <div>
                        <h4>Качество</h4>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <img src={milk} alt="img"></img>
                </div>
                <div class={st.services_card}>
                    <div>
                        <h4>Консультация</h4>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div class={st.services_card}>
                    <div>
                        <h4>Доступность</h4>
                        <p>Мы предлагаем лучшее соотношение цены и качества.</p>
                    </div>
                    <img src={milk} alt="img"></img>
                </div>
            </div>
            <h2>Partners</h2>
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
                    <img src="https://iamjustkhan.github.io/bloo/content/icons/Yota_v2.svg" alt="img"></img>
                    <span>Yota</span>
                </div>
            </div>
        </div>
    
        
    )
}

export default About;