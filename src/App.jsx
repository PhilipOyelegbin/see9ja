import React from 'react';
import Nav from './components/Nav.jsx';
import Landing from './components/Landing.jsx';
import Hero from './components/landing/Hero.jsx';
import History from './components/landing/History.jsx';
import Festivals from './components/landing/Festivals.jsx';

const App = () => {
  return (
    <>
      <Landing>
        <Nav/>
        <Hero/>
        <History/>
        <Festivals/>
      </Landing>
    </>
  )
}

export default App