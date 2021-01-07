import React, { useState} from 'react';
import Nav from './compnents/nav/nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Product from './compnents/products/product';
import Header from './compnents/header/header';
import Form from './compnents/form/form';
import Footer from './compnents/footer/footer';
import About from './compnents/about/about';
// import News from './compnents/news/news';
import Contacts from './compnents/contacts/contacts';
import Faq from './compnents/faq/faq';
import Main from './compnents/main/main';
// import NewsCard from './compnents/news/newsCard';
import ScrollToTop from './compnents/scrollToTop/scrollToTop';
import Categories from './compnents/categories/categories';
import CategoryCard from './compnents/categories/categoriesCard';
import ContactBtn from './compnents/contactBtn/contactBtn';

function App() {

  // useEffect(() => {
  //     let title = document.querySelector('.blog_card_intro h3');
  //     console.log(title)

  // }, []);
  
  const [rus, setRus] = useState(true);
  const changeLang = () => {
    setRus(false)
  }
  return (
    <BrowserRouter>
      <ScrollToTop>
        <div className="App">
          <Nav changeLang={changeLang} rus={rus} />
          <Header />
          <Switch>
            <Route path="/" component={Main} exact />
            <Route path='/product/:id' component={Product} />
            <Route path='/category/:id' component={CategoryCard} />
            <Route path="/about" component={About} />
            {/* <Route exact path="/news" component={News} />
            <Route path='/news/:id' component={NewsCard} /> */}
            <Route path="/contacts" component={Contacts} />
            <Route path="/faq" component={Faq} />
            <Route path='/categories' component={Categories} />
          </Switch>
          <ContactBtn />
          <Form />
          <Footer />
        </div>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
