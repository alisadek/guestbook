import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import HomePage from "./pages/home-page/home-page.component";
import SignInAndSignUp from "./pages/signin-signup/sigin-signup.component";

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage}></Route>
				<Route path='/signin' component={SignInAndSignUp}></Route>
			</Switch>
		</div>
	);
}

export default App;
