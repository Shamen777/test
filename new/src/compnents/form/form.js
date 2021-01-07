import React from 'react';
import st from './form.module.css';


const Form = () =>{
     
    return(
        <div className={st.form}>
            <h2>Форма обратной связи</h2>
            <div className={st.feedback}>
                <div className={st.feedback_img}></div>
                <form>
                    <input placeholder="name"></input>
                    <input placeholder="email"></input>
                    <label></label>
                    <textarea placeholder="message"></textarea>
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Form;