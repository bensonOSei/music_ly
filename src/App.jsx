import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Chat } from "./pages/Chat";
import { OnlineProvider } from "./serviceProviders/OnlineContext";
import { Contributors } from "./pages/Contributors";
import { Start } from "./pages/Start";
import { AuthProvider } from "./serviceProviders/providers/AuthProvider";
import { LoginForm } from "./components/form/LoginForm";
import { SignUpForm } from "./components/form/SignUpForm";
import { UserProvider } from "./serviceProviders/providers/UserProvider";

function App() {
	return (
		<UserProvider>
			<AuthProvider>
				<OnlineProvider>
					<BrowserRouter>
						<Routes>
							<Route
								path="/"
								element={<Home />}
							/>
							<Route
								path="chat"
								element={<Chat />}
							/>
							<Route
								path="contributors"
								element={<Contributors />}
							/>
							<Route
								path="start"
								element={<Start />}>
								<Route
									path="login"
									element={<LoginForm />}
								/>
								<Route
									path="signup"
									element={<SignUpForm />}
								/>
							</Route>
						</Routes>
					</BrowserRouter>
				</OnlineProvider>
			</AuthProvider>
		</UserProvider>
	);
}

export default App;
