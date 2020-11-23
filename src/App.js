import React from 'react';
import './App.scss';
import Category from './components/Category';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      {/* <h1>This page works</h1> */}
      <Navbar />
      <Header />
      <Category />
      <Footer />
    </div>
  );
}

export default App;
