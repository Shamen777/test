import React from 'react';
import home from './icons/home.svg';
import call from './icons/call.svg';
import mail from './icons/mail.svg';
import st from './contacts.module.css';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';


const Contacts = () =>{
    const center = {
        lat: 42.87624383150108,
        lng: 74.63346881903217
      }
    const zoom = 19;

    return(
        <div>
            <div className={st.contacts_block}>
                <div className={st.contacts_block_card}>
                    <img src={home} alt="img"></img>
                    <h5>Visit us</h5>
                    <p>Наша компания ориентирована на специалистов молочной отрасли. В списке предлагаемых нами продуктов</p>
                    <span className={st.direction}>Кыргызская Республика, г. Бишкек, ул. Гражданская 53, офис 307</span>
                </div>
                <div className={st.line}></div>
                <div className={st.contacts_block_card}>
                    <img src={call}alt="img"></img>
                    <h5>Call us</h5>
                    <p>Наша компания ориентирована на специалистов молочной отрасли. В списке предлагаемых нами продуктов</p>
                    <div className={st.direction}>
                    <a href="#">0(555)-33-33-33,</a>
                    <a href="#"> 0(555)-33-33-33,</a>
                    <a href="#"> 0(555)-33-33-33</a>
                    </div>
                </div>
                <div className={st.line}></div>
                <div className={st.contacts_block_card}>
                    <img src={mail} alt="img"></img>
                    <h5>Contact us</h5>
                    <p>Наша компания ориентирована на специалистов молочной отрасли. В списке предлагаемых нами продуктов</p>
                    <a href="#">onesta_group@mail.ru</a>
                </div>
            </div>
            <div className={st.map_container}>
                <GoogleMapReact defaultCenter={center} defaultZoom={zoom}>
                    <Marker
                        lat={42.87624383150108}
                        lng={74.63346881903217}
                        text="My Marker"/>
                </GoogleMapReact>
            </div>
        </div>
    )
}

export default Contacts;