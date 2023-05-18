import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Banner from './Benner/Banner';
import Article from './Article/Article';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Banner/>
      <Article/>
      <Footer/>
    </div>
  );
};

export default App;
