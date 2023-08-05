//hello world from JavaScript
const root = document.getElementById("root");
const newH1 = document.createElement("h1");
newH1.innerHTML = "Hello from JS";
root.appendChild(newH1);

//Hello world using React
const heading = React.createElement("h1", {}, "hello from react");
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(heading);

//create multiple nested elemets
const parent = React.createElement("div", { id: "parent" }, 
    React.createElement("div", { id: "child" },
        [
            React.createElement("h1", {}, "H1 from multiple"),
            React.createElement("h1", {}, "Second H1 from multiple")
        ]
    )
);
const root3 = ReactDOM.createRoot(document.getElementById("root3"))
root3.render(parent);