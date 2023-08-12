/**
 * npm - install node package
 * npx - execute node package
 */

/**
 * creating element in React takes in 3
 * HTML element,
 * object of attributes like class, id
 * it's children
 *      The child can be another create element to nest elements inside another
 *      we can use [] to add 2 elemts in the same level.
 */

React.creatElement("div", { id: "first-div" }, "Hello");

/**
 * creating root
 * assiging "root" from DOM as React root
 */

const root = React.creatRoot(document.getElementById("root"));

/**
 * render - renders parent inside root
 */

root.render(parent);

/**
 * start parcel
 */
// npx parcel index.html

/**
 * To code in react without doing npm create react app at the begining
 *      -create normal HTML, CSS, JS files
 *      -install parcel - npm install -D parcel (-D means it's a devDependencies)
 *      -install react and reactDOM - npm install react, npm install react-dom
 *      -run parcel - npx parcel index.html
 *      -add a "start" scrip in package.json to do "parcel index.html"
 *      -then do "npm start" and "npm run build"
 */

/**when we do
 * const headingUsingJSX = <h1 id="headingUsingJSX">H1 from JSX</h1>;
 * JavaScript engine doesn't understand this
 * BABEL transpiles so that react understands it and before it reaches JS Engine which is managed by Parcel or webpack
 * JSX => BABEL transpiles into React.createElement => ReactElement - JS Object => HTML Element(render)
 */

/**
 * JSX is HTML line syntax inside JavaScript
 * We use className in JSx insatead of HTML class
 * We can camel casing in JSX instead of hyphen in HTML
 * wrap in () for multiple lines
 */

/**
 * COMPONENTS
 * Component is a normal javascript function which returns a JSX or a div
 * Class Based
 * Functional Based  - Always starts with capital letter
 * Component Composisition - using one component inside another. Just call the oher component like <.../> inside the other
 */

/**
 * Imports of are 2 types
 * 1. Named
 *      - exported in the variable creation line as  - export const blah
 *      - imported as - import { blah } from ../../ fileName
 * 2. default
 *      - exported as - export default blah at the end of component file.
 *      - imported as - import blah from ../../fileName
 */

/**
 * Hooks - Normal JS Functions
 * 1. useState
 *      - creates super powerful react state variables.
 *      - imported as named import using { useState } from "react"
 *      const [varName] = useState(initialize value)
 * As soon as the state varibale changes, react rerenders the component in optimised way and very less code
 * Keeps data kayer in sync with the UI Layer
 * 2. useEffect
 */

/**
 * WHY IS REACT SO FAST? -  efficient DOM manipulation and crazy fast rerenders
 *1. Virtaul DOM
 *      - Copy of the DOM in the form of an Object
 *2. DIFF ALGORITHM. REACT FIBER, RECONCILIATION ALGORITHM
 *      - check sthe difference between old virtual DOM and new virtual DOM after state change and changed the UI
 */
