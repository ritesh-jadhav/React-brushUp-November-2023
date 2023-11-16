import React from "react";
import ReactDOM  from "react-dom/client";



// React.createElement => object => HtmlElement(render)

const heading = React.createElement("h1",{id: "heading"},"React element");

// JSX - Html-likely syntax that understand by JS engine  
// JSX => babel transpile it to React.createElement => ReactElement-JS Object => htmlElement(reder)

const jsxHeading = <h1 id="heading">React JSX element</h1>

const content = <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi labore nisi nobis eligendi illo ea et, dolorem voluptatum alias tempora repellat corrupti numquam officiis ipsam aliquid natus nemo dignissimos tenetur.</p>

// Functional Components 

const about = function (){
    return <h1>This is a functional component</h1>
}

const BrandTitle = () =>{
    return <div className="container">
        {about()}
        <h1 id="heading">React functional Component</h1>
        {content}
        {jsxHeading}
    </div>
}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BrandTitle/>);


