import React, { useState } from "react";
import "../styles/Signup.css";
import { Buttons } from "../assets/Buttons";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
	const linkStyles = {
		color: "#000",
		textDecoration: "none",
	};

	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		username: "",
		companyName: "",
		mobileNum: "",
		email: "",
		password: "",
		confirmpassword: "",
	});
	const [error, setError] = useState("");
	const [message, setMessage] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async e => {
		e.preventDefault();

		if (data.password !== data.confirmpassword) {
			setTimeout(() => {
				setError("");
			}, 3000);
			return setError("Passwords do not match");
		}

		try {
			const url = "https://streetwisegraphicsofficial.herokuapp.com/api/users";
			const { data: res } = await axios.post(url, data);
			setMessage(res.message);
			setTimeout(() => {
				setMessage("");
			}, 3000);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
				setTimeout(() => {
					setError("");
				}, 3000);
			}
		}
	};

	return (
		<>
			<div className="container__signup">
				<div className="signup-form">
					<div className="signupform__header">
						<h1>Sign Up</h1>
						<div className="singupform__header--text">
							it's quick and easy
							<div className="line__break">
								<hr />
							</div>
						</div>

						<form onSubmit={handleSubmit}>
							<div className="container__user--inputs">
								<div className="container__details--user">
									<div className="details--user__firstname">
										<input
											className="userinput"
											type="text"
											placeholder="First name"
											name="firstName"
											onChange={handleChange}
											value={data.firstName}
										/>
									</div>

									<div className="details--user__lastname">
										<input
											className="userinput"
											type="text"
											placeholder="Last name"
											name="lastName"
											onChange={handleChange}
											value={data.lastName}
										/>
									</div>
								</div>

								<div className="container__username--user">
									<div className="details--user__username">
										<div className="details--user__username--input">
											<input
												className="userinput"
												type="text"
												placeholder="Provide a username"
												id="name"
												name="username"
												value={data.username}
												onChange={handleChange}
											/>
										</div>
									</div>
								</div>

								<div className="container__emails--user">
									<div className="details--user__email">
										<div className="details--user__email--input">
											<input
												className="userinput"
												type="email"
												placeholder="Enter your email address"
												name="email"
												onChange={handleChange}
												value={data.email}
											/>
										</div>
									</div>
								</div>

								<div className="container__mobilenum--user">
									<div className="details--user__mobile">
										<div className="details--user__mobile--input">
											<input
												className="userinput"
												type="text"
												placeholder="Enter your mobile number"
												value={data.mobileNum}
												name="mobileNum"
												onChange={handleChange}
											/>
										</div>
									</div>
								</div>

								<div className="container__company--user">
									<div className="details--user__company">
										<div className="details--user__company--input">
											<input
												className="userinput"
												type="text"
												name="companyName"
												placeholder="Enter your company name"
												value={data.companyName}
												onChange={handleChange}
											/>
										</div>
									</div>
								</div>

								<div className="container__password--user">
									<div className="details--user__password">
										<div className="details--user__password--input">
											<input
												className="userinput"
												type="password"
												placeholder="Enter your password"
												name="password"
												value={data.password}
												onChange={handleChange}
											/>
										</div>
									</div>
								</div>

								<div className="container__confirmpassword--user">
									<div className="details--user__confirmpassword">
										<div className="details--user__confirmpassword--input">
											<input
												className="userinput"
												type="password"
												placeholder="Confirm your password"
												name="confirmpassword"
												value={data.confirmpassword}
												onChange={handleChange}
											/>
										</div>
									</div>
								</div>
								<div className="error_message_container">
									{error && <div className="error_msg">{error}</div>}
									{message && <div className="message_msg">{message}</div>}
								</div>
								<div className="container__user--actions">
									<div className="user__actions--wrapper">
										<div className="user__signup">
											<Buttons
												buttonSize="btn--registerlogins"
												buttonStyle="btn--registersandlogs"
											>
												Sign up
											</Buttons>
										</div>

										<div className="user__checkaccount">
											<div className="redirectto--login">
												<div className="paragraph">
													<p>
														Already have an account?
														<Link style={linkStyles} to="/login">
															<span className="loginhere">
																<strong> LOGIN here </strong>
															</span>
														</Link>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Signup;
