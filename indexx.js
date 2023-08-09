import React from "react";
import ReactDOM from "react-dom/client";

//creating element using vanilla JavaScript
const root = document.getElementById("root");
const newH1 = document.createElement("h1");
newH1.innerHTML = "Hello from JS. Haha!!!";
root.appendChild(newH1);

//creating element using React
const heading = React.createElement("h1", {}, "Hello from react");
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(heading);

//create multiple nested elemets using React
const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [
            React.createElement("h1", {}, "H1 from multiple"),
            React.createElement("h1", {}, "Second H1 from nested react elemets")
        ]
    )
);

const root3 = ReactDOM.createRoot(document.getElementById("root3"))
root3.render(parent);

//creating elements using JSX
const headingUsingJSX = <h1 id="headingUsingJSX">H1 from JSX</h1>;
const root4 = ReactDOM.createRoot(document.getElementById("root4"));
root4.render(headingUsingJSX);

//Basic React Functional Component
const HeadingComponent = () => {
    return <h1>H1 from 1st React Functional Component</h1>
}

//Above function can be cut to this. Omit return and the {}
//Component Composition - use 1 Component inside another
const HeadingComponentInShort = () => (
    <div>
        <HeadingComponent/>
        <h1 className="heading">H1 from 2nd React Functional Component </h1>
    </div>
)

const root5 = ReactDOM.createRoot(document.getElementById("root5"));
root5.render(<HeadingComponentInShort/>);
    