/**
 * <div class="parent">
 *   <div id="child">
 *   <h1>Im H1 Tag</h1>
 * </div>
 * 
 * </div>
 * 
 * 
 * 
 * </
 */

const Parent = React.createElement(
    "div" ,
     {id:"parent"},
    React.createElement("div" , {id:"child"} ,
   [React.createElement("h1" , {} , "Im an H1 Tag"),
    React.createElement("h2" , {} , "Im an h2 tag")]   //Array of children in nested structure.
)
);

console.log(Parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Parent); 

// ReactElement(Object) => HTML(Browser Understands)



//JSX : This makes react more critical used by createElement . so there comes JSX makes the 
// Which makes the life easier.




// const heading = React.createElement("h1" , 
//     {id:"heading" , xyz:"abc" } , //Attribute to the H1 Tag
//     "Hello World From Reactjs!");
//     console.log(heading);  //object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);