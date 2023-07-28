import React, { useState } from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";
import { Buttons } from "../assets/Buttons";
import axios from "axios";

const Login = () => {
	const linkStyles = {
		color: "#000",
		textDecoration: "none",
	};

	const [data, setData] = useState({ username: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const url = "https://streetwisegraphicsofficial.herokuapp.com/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/content";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}

			setTimeout(() => {
				setError("");
			}, 3000);
		}
	};

	return (
		<>
			<div className="container--loginpage">
				<div className="login--details">
					<div className="login__header">
						<h1 className="login__header--text"> Login </h1>
					</div>

					<form onSubmit={handleSubmit}>
						<div className="login__userdetails">
							<div className="userinput__username">
								<div className="input-username">
									<input
										className="userdetails"
										type="text"
										name="username"
										placeholder="Enter your username"
										onChange={handleChange}
										value={data.username}
									/>
								</div>
							</div>

							<div className="userinput__password">
								<div className="input-pasword">
									<input
										className="userdetails"
										type="password"
										name="password"
										placeholder="Enter your password"
										onChange={handleChange}
										value={data.password}
									/>
								</div>
							</div>
							<div className="error_message_container">
								{error && <div className="error_msg">{error}</div>}
							</div>

							<div className="linkstoredirect">
								<div className="redirect--login">
									<Buttons
										buttonSize="btn--registerlogins"
										buttonStyle="btn--registersandlogs"
									>
										Log In
									</Buttons>
								</div>

								<div className="redirect--signup">
									<Link style={linkStyles} to="/signup">
										<p className="signup"> Sign Up </p>
									</Link>
								</div>

								<div className="redirect--forgotpassword">
									<Link style={linkStyles} to="/forgotpassword">
										<p className="forgotpass"> Forgot your password? </p>
									</Link>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Login;
