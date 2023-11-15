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

  const enabled = email.length > 5 && password.length > 5;

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
						placeholder="minimum 6 symbols"
						value={password}
						onChange={handlePassword}
						minLength={6}
					/>
				</label>
				<button 
          onClick={handleLogin}
          disabled={!enabled}
        >
          Log In
        </button>
			</form>
		</div>
	);
}

export default App;
