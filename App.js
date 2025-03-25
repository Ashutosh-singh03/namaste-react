/**  
 * <div>
 * <div>
 * <h1> i am a h1 tag </h1>
 * <h2> i am h2 tag</h2>
 * </div>
 * <div>
 * <h1> i am a h1 tag </h1>
 * <h2> i am h2 tag</h2>
 * </div>
 * 
 * </div>
 * 
 * 
 * 
 * Reactelement(Object)=>HTML(Browser Understand)
 * **/
import React from 'react';
import ReactDOM from 'react-dom/client'
const parent=React.createElement("div",
    {id:"parent"},
[    React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"i am a h3 tag")
    ,React.createElement("h2",{},"i am a h2 tag")
]
),
React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"i am a h1 tag")
    ,React.createElement("h2",{},"i am a h2 tag")
]
)]
);

const heading=React.createElement("h1",{id:"heading"},"Hello from Ashu");
const main=ReactDOM.createRoot(document.getElementById("root"));


console.log(parent)


main.render(parent)