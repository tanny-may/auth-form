import { useState } from "react";

function App() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [authorized, setAuthorized] = useState(false);

	function handleEmail(e) {
		setEmail(e.target.value);
	}

	function handlePassword(e) {
		setPassword(e.target.value);
	}

	function handleLogin(e) {
		e.preventDefault();
		setAuthorized(true);
		fetch("login", email, password);
	}

	function handleLogout(e) {
		e.preventDefault();
		setAuthorized(false);
		fetch("logout", email);
	}

	const buttonEnabled = checkEmail(email) && checkPassword(password);

	if (authorized) {
		return (
			<div>
				<form>
					<h2>Hello, {email.split("@")[0]}!</h2>
					<p>You are authorized</p>
					<button onClick={handleLogout}>Log Out</button>
				</form>
			</div>
		);
	}

	return (
		<div>
			<form>
				<h1>Login Here</h1>
				<label>
					E-mail <br></br>
					<input
						type="email"
						name="email"
						placeholder="example@mail.com"
						value={email}
						onChange={handleEmail}
					/>
				</label>
				<label>
					Password <br></br>
					<input
						type="password"
						name="password"
						placeholder="●●●●●●"
						value={password}
						onChange={handlePassword}
						minLength={6}
					/>
				</label>
				<span style={checkPassword(password) ? { display: "none" } : { display: "flex" }}>
					password must be more than 6 chars and include at least one number
				</span>
				<button onClick={handleLogin} disabled={!buttonEnabled}>
					Log In
				</button>
			</form>
		</div>
	);
}

function fetch(...args) {
	console.log("Fetch with data:", args);
}

const emailRegexp = /[^\s@]+@[^\s@]+\.[^\s@]+/;
function checkEmail(email) {
	return Boolean(email.match(emailRegexp));
}

const passwordRegexp = /^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/;
function checkPassword(password) {
	return Boolean(password.match(passwordRegexp));
}

export default App;
