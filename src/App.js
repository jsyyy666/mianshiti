import React from 'react';
import Header from '../src/Views/Header'
import Banner from '../src/Views/Banner'
import NewPositon from '../src/Views/NewPositon'
import Footer from '../src/Views/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <NewPositon></NewPositon>
      <Footer></Footer>
    </div>
  );
}

export default App;
