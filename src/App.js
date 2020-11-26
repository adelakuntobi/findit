import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Cart from './components/Cart/Cart';
import Category from './components/Shop/Category';
import Footer from './components/Landing/Footer';
import Fullpage from './components/Landing/Fullpage';
import Login from './components/Landing/Login';
import Navbar from './components/Landing/Navbar';
import Personal from './components/Shop/Personal';


function App() {
  return (
    <div className="App overflow-hidden">
      <Navbar />
      {/* <Paypal /> */}
      <Switch>
        <Route exact path="/" component={Fullpage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/shop" component={Category} />
        <Route exact path="/product/:id" component={Personal} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
