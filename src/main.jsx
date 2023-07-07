import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/authContext";
import { FiltersContextProvider } from "./context/filtersContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthContextProvider>
				<FiltersContextProvider>
					<App />
				</FiltersContextProvider>
			</AuthContextProvider>
		</BrowserRouter>
	</React.StrictMode>
);
