import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Chat } from "./pages/Chat";
import { OnlineProvider } from "./serviceProviders/OnlineContext";

function App() {
	return (
		<>
			<OnlineProvider>
				<BrowserRouter>
					<Routes>
						<Route
							path="/"
							element={<Home />}
						/>
						<Route
							path="/chat"
							element={<Chat />}
						/>
					</Routes>
				</BrowserRouter>
			</OnlineProvider>
		</>
	);
}

export default App;
