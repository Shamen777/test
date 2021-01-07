import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import st from './nav.module.css';
import logo from './logo.png'

const Nav = () => {
    useEffect(() => {
        let lastScrollTop = 0;
        window.addEventListener('scroll', function () {
            let scrolled = window.pageYOffset || document.documentElement.scrollTop;
            const nav = document.querySelector('nav');
            if (scrolled > lastScrollTop) {
                nav.style.top = -70 + 'px';
            } else {
                nav.style.top = 0 + 'px';
            }
            if (scrolled > document.documentElement.clientHeight / 2 - 70) {
                nav.style.background = 'rgba(231, 231, 231, 0.9)';
            } else {
                nav.style.background = 'none';
            }
            lastScrollTop = scrolled;
        })
    })
    const [navBtn, setNavBtn] = useState(false);
    const changeNavBtn = () => {
        setNavBtn(!navBtn)
    }
    const closeMenu = (e) => {
        const nav_items = document.querySelectorAll('nav a');
        nav_items.forEach(element => {
            element.classList.remove('active_nav_item');
        });
        e.target.classList.add('active_nav_item');
        setNavBtn(false);
    }
    return (
        <nav className={st.nav}>
            <Link to='/' className={st.logo}><img src={logo} alt="logo"/></Link>
            <div className={navBtn ? st.menu_btn_active : st.menu_btn} onClick={changeNavBtn}><span></span></div>
            <ul className={navBtn ? st.menu_active : st.menu}>
                <Link to='/' onClick={e => closeMenu(e)}>главная</Link>
                <Link to='/categories' onClick={e => closeMenu(e)}>продукция</Link>
                <Link to='/about' onClick={e => closeMenu(e)}>о нас</Link>
                <Link to='/news' onClick={e => closeMenu(e)}>новости</Link>
                <Link to='/contacts' onClick={e => closeMenu(e)}>контакты</Link>
                <Link to='/faq' onClick={e => closeMenu(e)}>FAQ</Link>
            </ul>
        </nav>
    )
}

export default Nav;