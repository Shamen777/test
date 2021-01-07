import React from 'react';
import st from './header.module.css';
import {useLocation} from 'react-router-dom';
import milk from './image/milk1.jpg';
import greenForMain from './image/green-for-mainpage.jpg'

const Header = () =>{
    let location = useLocation().pathname;
    // const [title, setTitle] = useState();

//     const [rerender, setRerender] = useState(); // or any state
// const [afterRender, setAfterRender] = useState();// internal state

// // (1)
// useEffect(() => {
//    if (!afterRender){
//     let title = document.querySelector('.blog_card_intro h3');
//     console.log(title)
//    }

//    setAfterRender(false);
// }, [afterRender]);

// useEffect(() => {
//    setAfterRender(true); // (1) will be called after DOM rendered
// }, [rerender]); // or don't set any if you want to listen to all re-render events
    // useLayoutEffect(() =>{
    //     let title = document.querySelector('.blog_card_intro h3');
    //         setTitle(title);
    // })
    // useEffect(() => {
    //     console.log('test')
    //     setTimeout(function(){
    //         let title = (document.querySelector('.blog_card_intro h3')).innerHTML;
    //         let title_intro = (document.querySelector('.title_intro'));
    //         title_intro.innerHTML += title;
    //     }, 1000)
    //   });


    return(
        <div className={st.header}>
            {
                location === '/about' && <header className={st.about}>
                    <div className={st.about_header}>
                        <h1>Onesta group</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis perferendis, iure tenetur amet.</p>
                        <button className={st.header_button}>Связаться</button>
                    </div>
                    <img src={milk} alt='img'></img>
                    </header>
            }
            {
                location === '/' && <header>
                <h1>Onesta Group</h1>
                <img src={greenForMain} alt='img'></img>
                </header>
            }
            {
                location === '/products' && <header>
                <h1>Products</h1>
                <img src={greenForMain} alt='img'></img>
                </header>
            }
            {
                location === '/tehnolog' && <header>
                <h1>Tehnolog Page</h1>
                <img src={greenForMain} alt='img'></img>
                </header>
            }
            {
                location === '/news' && <header>
                <h1>News</h1>
                <img src={greenForMain} alt='img'></img>
                </header>
            }
            {
                location === '/contacts' && <header>
                <h1>Contacts</h1>
                <img src={greenForMain} alt='img'></img>
                </header>
            }
            {
                // location.match('/product/') && title && <h1 className="title_intro">{title.innerHTML}</h1>
            }
        </div>
    )
}

export default Header;