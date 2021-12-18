import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initTranslations } from "./translations";

console.log(
  "%c" + "Welcome to Soffacto",
  "font-family:Comic Sans MS; font-size:50px; font-weight:bold; color:blue"
);

initTranslations();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals(console.log);
