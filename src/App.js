import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Fullpage from './components/Fullpage';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Personal from './components/Personal';


function App() {
  return (
    <div className="App overflow-x-hidden">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Fullpage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/product/:id" component={Personal} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
