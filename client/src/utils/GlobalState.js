import React from "react";

const ModalContext = React.createContext({
    title: ["\".Sombra\", 2017", "\"Funding Founding\", 2019", "\"VRweld\", 2020", "\"UMEWE\", 2020", "\"What's My Weather?\", 2020", "\"CSC-Visualizer\", 2020"],
    technologies: [["Unity Game Engine", "C#", "Javascript"], ["HTML", "CSS", "FFMPEG"], ["HTML", "CSS", "PHP", "MySQL", "WordPress", "Unity Game Engine"], ["HTML", "CSS", "JavaScript", "Google Maps API", "Zomato API", "Geocoding API"], ["HTML", "CSS", "JavaScript"], ["HTML", "CSS", "JavaScript", "Passport", "Node.js", "Sequelize", "MySQL", "Express.js"]],
    description: [],
    links: [["https://vimeo.com/315569123"], ["https://pre.vc"], ["http://vrweld.com/demo"], ["https://oxfordblucher.github.io/Restaurant-Roulette", "https://github.com/oxfordblucher/Restaurant-Roulette"], ["https://clairevita.github.io/WeatherApp", "https://github.com/clairevita/WeatherApp"], ["https://scorecard-visualizer.herokuapp.com", "https://github.com/J35RL4R/college-score-card-visualizer"]],
    semantic: [["Video Demo"], ["Pre.vc"], ["vrweld.com"], ["Deployed Site", "Github Repository"], ["Deployed Site", "Github Repository"], ["Deployed Site", "Github Repository"]]
});

export default ModalContext;