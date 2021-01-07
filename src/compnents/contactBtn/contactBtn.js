import React from 'react';
import st from './contactBtn.module.css';
import btn from './images/btn.png'
import call from './images/call.png'
import mail from './images/mail.png'
import watsapp from './images/watsapp.png'

const CallBtn = () => {
    const activeBtn = () => {
        let networks = document.querySelector('.' + st.networks);
        networks.classList.toggle(st.networks_active);
    }
    return (
        <div className={st.callBtn} onClick={activeBtn}>
            <div className={st.callBlock}>
                <span className={st.call}><img src={btn} alt={btn}></img></span>
                <div className={st.networks}>
                    <a href="/"><img src={call} alt="call"></img></a>
                    <a href="/"><img src={mail} alt="mail"></img></a>
                    <a href="/"><img src={watsapp} alt="watsapp"></img></a>
                </div>
            </div>
        </div>
    )
}

export default CallBtn;