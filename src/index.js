import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//*to animate any changes in the layout of the dom inside app, just have to add a "layout" prop
import { AnimateSharedLayout } from "framer-motion";

ReactDOM.render(
  <React.StrictMode>
    <AnimateSharedLayout>
      <App />
    </AnimateSharedLayout>
  </React.StrictMode>,
  document.getElementById("root")
);
