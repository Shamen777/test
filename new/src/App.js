import React, { useState} from 'react';
import Nav from './compnents/nav/nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import ProductCard from './compnents/products/productCard';
import Header from './compnents/header/header';
import Form from './compnents/form/form';
import Footer from './compnents/footer/footer';
import Products from './compnents/products/products';
import About from './compnents/about/about';
import News from './compnents/news/news';
import Contacts from './compnents/contacts/contacts';
import Tehnolog from './compnents/tehnolog/tehnolog';
import Main from './compnents/main/main';
import NewsCard from './compnents/news/newsCard';
import ScrollToTop from './compnents/scrollToTop/scrollToTop';

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
            <Route path='/product/:id' component={ProductCard} />
            <Route path="/products" component={Products} />
            <Route path="/about" component={About} />
            <Route path="/news" component={News} />
            <Route path='/news/:id' component={NewsCard} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/tehnolog" component={Tehnolog} />
          </Switch>
          <Form />
          <Footer />
        </div>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
