import React from 'react';
import st from './form.module.css';


const Form = () => {

    return (
        <section className={st.feedback_section}>
            <h2>Свяжитесть с нами</h2>
            <form>
                <div className={st.left_container}>
                    <input placeholder="Ваше имя" />
                    <input placeholder="Ваша почта" />
                </div>
                <div className={st.right_container}>
                    <textarea placeholder="Ваше письмо"></textarea>
                </div>
                <button>Отправить</button>
            </form>
        </section>
    )
}

export default Form;