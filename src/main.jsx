import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthContextProvider } from "./context/authContext";
import { FiltersContextProvider } from "./context/filtersContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <FiltersContextProvider>
      <App />
    </FiltersContextProvider>
  </AuthContextProvider>
);
