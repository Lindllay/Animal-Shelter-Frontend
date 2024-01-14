import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/authContext";
import { FiltersContextProvider } from "./context/filtersContext.jsx";
import ScrollToTop from "./utils/scrollToTop.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <AuthContextProvider>
      <FiltersContextProvider>
        {/* <Routes>
              <Route path="/*" element={<App />}></Route>
            </Routes> */}
        <App />
      </FiltersContextProvider>
    </AuthContextProvider>
    {/* </BrowserRouter> */}
  </React.StrictMode>
);
