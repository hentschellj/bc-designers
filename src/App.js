import React from 'react';
import Nav from './components/Nav';
import SectionTop from './components/SectionTop';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';
import Contact from './components/Contact';
import Social from './components/Social';
import SectionBottom from './components/SectionBottom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />

      <SectionTop />

      <SectionOne />

      <SectionTwo />

      <SectionThree />

      <SectionFour />

      <Contact />

      <Social />

      <SectionBottom />
    </div>
  );
}

export default App;
