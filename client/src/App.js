import React, { useState } from 'react';
import "./App.css";
import Nav from './components/Nav';
import Main from './components/Main';
import Section from './components/Section';

function App() {


  return (
    <div>
      <Nav />
      <Main />
      <hr className="my-4"></hr>
      <Section />
    </div>

  );
   

}

export default App;
