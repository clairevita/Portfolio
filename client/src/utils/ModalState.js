import React from "react";

const ModalContext = React.createContext({
    title: [],
    technologies: [],
    description: [],
    links: [],
    semantic: [],
    i: 0
});

export default ModalContext;