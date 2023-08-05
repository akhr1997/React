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

React.creatElement("div", {id: "first-div"}, "Hello")

/**
 * creating root
 * assiging "root" from DOM as React root
 */

const root = react.creatRoot(document.getElementById("root"))

/**
 * render - renders parent inside root
 */

root.render(parent)

/**
 * start parcel
 */
// npx parcel index.html