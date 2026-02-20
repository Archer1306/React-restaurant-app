const parent=React.createElement("div",{id:"parent"},[
  React.createElement("div",{id:"child1"},
   [ React.createElement("h1",{},"Hello I am h1 Inside Div"),React.createElement("h2",{},"Hello I am h2 Inside Div")]
  ),React.createElement("div",{id:"child2"},
   [ React.createElement("h1",{},"Hello I am h1 Inside Div"),React.createElement("h2",{},"Hello I am h2 Inside Div")]
)]
);

// const heading=React.createElement("h1",{},"Hello World!");

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);


