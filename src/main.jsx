import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/authContext";
import { FiltersContextProvider } from "./context/filtersContext.jsx";
import ScrollToTop from "./utils/scrollToTop.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<ScrollToTop>
				<AuthContextProvider>
					<FiltersContextProvider>
						<App />
					</FiltersContextProvider>
				</AuthContextProvider>
			</ScrollToTop>
		</BrowserRouter>
	</React.StrictMode>
);
