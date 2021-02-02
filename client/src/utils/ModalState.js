import React from "react";

const ModalContext = React.createContext({
    title: [],
    technologies: [],
    description: [],
    links: [],
    semantic: [],
    key: ""
});

export default ModalContext;