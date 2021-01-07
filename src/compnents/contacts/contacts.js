import React from 'react';
import home from './icons/home.png';
import call from './icons/call.png';
import mail from './icons/mail.png';
import st from './contacts.module.css';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';


const Contacts = () => {
    const center = {
        lat: 42.87624383150108,
        lng: 74.63346881903217
    }
    const zoom = 19;

    return (
        <div>
            <section className={st.contacts_card_container}>
                <a href="/contacts" className={st.contacts_card}>
                    <img src={mail} alt="mail"></img>
                    <h3>Напишите нам</h3>
                    <p>onesta_group@mail.ru</p>
                </a>
                <a href="/contacts" className={st.contacts_card}>
                    <img src={call} alt="mail"></img>
                    <h3>Позвоните нам</h3>
                    <p>+996 (550) 217 110</p>
                </a>
                <a href="/contacts" className={st.contacts_card}>
                    <img src={home} alt="mail"></img>
                    <h3>Посетите нас</h3>
                    <p>Показать на карте</p>
                </a>
            </section >
            <section className={st.map_container}>
                <GoogleMapReact defaultCenter={center} defaultZoom={zoom}>
                    <Marker
                        lat={42.87624383150108}
                        lng={74.63346881903217}
                        text="My Marker" />
                </GoogleMapReact>
            </section>
        </div >
    )
}

export default Contacts;