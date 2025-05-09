// div
// div child
// h1
//h2
// div
// div 

const parent =  React.createElement("div",{id:"parent"},   
    [  
        React.createElement("div",{ id:"child"}, 
            [
            React.createElement("h1",{id:"heading"}, "Hello World from React!"),
            React.createElement("h2",{id:"heading2"}, "Hello World from React!")
            ]),
      React.createElement("div",{ id:"child2"}, 
            [
            React.createElement("h1",{id:"heading"}, "Hello World from React!"),
            React.createElement("h2",{id:"heading2"}, "Hello World from React!")
        ])
    ]
);
console.log(parent);
       
const root = ReactDOM.createRoot(document.getElementById("root"));
     
root.render(parent);