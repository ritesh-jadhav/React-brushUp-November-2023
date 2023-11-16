import React from "react";
import ReactDOM  from "react-dom/client";



// React.createElement => object => HtmlElement(render)

const heading = React.createElement("h1",{id: "heading"},"React element");

// JSX - Html-likely syntax that understand by JS engine  
// JSX => babel transpile it to React.createElement => ReactElement-JS Object => htmlElement(reder)

const jsx = <h1 id="heading">React JSX element</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsx);