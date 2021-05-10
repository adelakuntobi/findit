import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import Loader from './components/Loader';
import Navbar from './components/Landing/Navbar';
import Footer from './components/Landing/Footer';
import ErrorPage from './components/Error';
// import Cart from './components/Cart/Cart';
const Cart = React.lazy(() => import('./components/Cart/Cart'));
const Category = React.lazy(() => import('./components/Shop/Category'));
const Fullpage = React.lazy(() => import('./components/Landing/Fullpage'));
const Login = React.lazy(() => import('./components/Landing/Login'));
const Personal = React.lazy(() => import('./components/Shop/Personal'));
const Signup = React.lazy(() => import('./components/Landing/Signup'));



function App() {
  return (
    <div className="App overflow-hidden">
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={Fullpage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/shop" component={Category} />
          <Route exact path="/product/:id" component={Personal} />
          <Route path='/404' component={ErrorPage} />
          <Redirect from='*' to='/404' />
        </Switch>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
