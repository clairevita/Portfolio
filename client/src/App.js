import React, { useState } from 'react';
import "./App.css";
import Nav from './components/Nav';
import Main from './components/Main';
import Section from './components/Section';
import Context from './utils/Context';
function App() {

const State = useState({
  suit: [
    "Claire ♙ Vita",
    "Claire ♗ Vita",
    "Claire ♖ Vita",
    "Claire ♔ Vita ",
    "Claire ♘ Vita"
  ],
  selectedTech: [],
  projects: [
    {portfolio0: {
      title: "\".Sombra\", 2017",
      description: ["Unity Game Engine", "C#", "Javascript"],
      links: ["https://vimeo.com/315569123"],
      semantic: ["Video Demo"]
  }},
  {portfolio1: {
      title: "\"Funding Founding\", 2019",
      description: ["HTML", "CSS", "FFMPEG"],
      links: ["https://pre.vc"],
      semantic: ["Pre.vc"]
  }},
  {portfolio2: {
      title: "\"VRweld\", 2020",
      description: ["HTML", "CSS", "PHP", "MySQL", "WordPress", "Unity Game Engine"],
      links: ["http://vrweld.com/demo"],
      semantic: ["vrweld.com"]
  }},
  {portfolio3: {
      title: "\"UMEWE\", 2020",
      description: ["HTML", "CSS", "JavaScript", "Google Maps API", "Zomato API", "Geocoding API"],
      links: ["https://oxfordblucher.github.io/Restaurant-Roulette", "https://github.com/oxfordblucher/Restaurant-Roulette"],
      semantic: ["Deployed Site", "Github Repository"]

  }},
  {portfolio4: {
      title: "\"What's My Weather?\", 2020",
      description: ["HTML", "CSS", "JavaScript"],
      links: ["https://clairevita.github.io/WeatherApp", "https://github.com/clairevita/WeatherApp"],
      semantic: ["Deployed Site", "Github Repository"]
  }},
  {portfolio5: {
      title: "\"CSC-Visualizer\", 2020",
      description: ["HTML", "CSS", "JavaScript", "Passport", "Node.js", "Sequelize", "MySQL", "Express.js"],
      links: ["https://scorecard-visualizer.herokuapp.com", "https://github.com/J35RL4R/college-score-card-visualizer"],
      semantic: ["Deployed Site", "Github Repository"]
  }}
  ]
})

  return (
    <Context.Provider value={{State}}>
      <Nav />
      <Main />
      <hr className="my-4"></hr>
      <Section />
    </Context.Provider>
  );
   

}

export default App;
