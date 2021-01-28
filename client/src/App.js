import React from 'react';
import "./App.css";
import Nav from './components/Nav';
import Main from './components/Main';
import Section from './components/Section';
function App() {
  return (
    <body>
      <Nav />
      <Main />
      <hr class="my-4"></hr>
      <Section />
    </body>
  );
}

export default App;
