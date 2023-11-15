import { useState } from "react";

function App() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// const [authorized, setAuthorized] = useState(false);

	function handleEmail(e) {
		setEmail(e.target.value);
	}

	function handlePassword(e) {
		setPassword(e.target.value);
	}

	function handleLogin(e) {
		e.preventDefault();
		console.log("button was clicked" + email + password);
	}

	const buttonEnabled = checkEmail(email) && checkPassword(password);

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

const emailRegexp = /[^\s@]+@[^\s@]+\.[^\s@]+/;
function checkEmail(email) {
	return Boolean(email.match(emailRegexp));
}

const passwordRegexp = /^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/;
function checkPassword(password) {
	return Boolean(password.match(passwordRegexp));
}

export default App;
