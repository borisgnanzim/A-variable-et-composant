import React from "react";
import ReactDOM from "react-dom/client";
import MyComponent from "./App";

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <MyComponent />
);

//JSX doit avoir un élément le plus externe
