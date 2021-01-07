import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import st from './nav.module.css';

const Nav = () => {
    useEffect(() =>{
        let lastScrollTop = 0;
        window.addEventListener('scroll', function(){
            let scrolled = window.pageYOffset || document.documentElement.scrollTop;
            const nav = document.querySelector('nav');
            if(scrolled > lastScrollTop){
                nav.style.top = -70 + 'px';
            }else{
                nav.style.top = 0 + 'px';
	}
    if (scrolled > document.documentElement.clientHeight / 2 - 70) {
        nav.style.background = 'black';
    } else {
        nav.style.background = 'none';
    }
    lastScrollTop = scrolled;
})
    })

    return(
            <nav className={st.nav}>
                <Link to='/' className={st.logo}>Onesta Group</Link>
                <ul className={st.menu}>
                    <Link to='/'>Главная</Link>
                    <Link to='/products'>Продукция</Link>
                    <Link to='/tehnolog'>Страница Технолога</Link>
                    <Link to='/about'>О компании</Link>
                    <Link to='/news'>Новости</Link>
                    <Link to='/contacts'>Контакты</Link>
                </ul>
                <span className={st.localization}>Рус</span>
                <span className={st.search}>Поиск...</span>
            </nav>
    )
}

export default Nav;