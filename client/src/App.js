import React from 'react';
import "./App.css";
import Nav from './components/Nav';
import Main from './components/Main';
import Section from './components/Section';
function App() {

  console.log("Welcome to my portfolio! Thanks for taking a look at a console. If you'd like to get in touch with me, head to the Contact page.");

  let suit = "♘"

  const suitChanger = setInterval(changeSuit, 7000);
  function changeSuit() {

    if (suit == "♘") {
      $("#suit").text("Claire ♙ Vita");
      suit = "♙";
      ;
    } else if (suit == "♙") {
      $("#suit").text("Claire ♗ Vita");
      suit = "♗";
    } else if (suit == "♗") {
      $("#suit").text("Claire ♖ Vita");
      suit = "♖";
    } else if (suit == "♖") {
      $("#suit").text("Claire ♔ Vita ");
      suit = "♔";
    } else if (suit == "♔") {
      $("#suit").text("Claire ♘ Vita");
      suit = "♘";
    }
  }

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
