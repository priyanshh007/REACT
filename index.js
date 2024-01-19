import React from "react";
import ReactDOM  from "react-dom/client";


const parent=React.createElement("h1",{id:"parent"},"I am H1 Tag ");

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
