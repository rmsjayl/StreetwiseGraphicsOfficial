import React, { useState } from "react";
import axios from "axios";
import "../styles/Forgotpass.css";
import Logo from "../img/logos/blacktransp.png";
import { Buttons } from "../assets/Buttons";

const Forgotpass = () => {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const url = `https://streetwisegraphicsofficial.herokuapp.com/api/passwordreset`;
			const { data } = await axios.post(url, { email });
			setMessage(data.message);
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
				setMessage("");
			}

			setTimeout(() => {
				setError("");
			}, 3000);
		}
	};

	return (
		<>
			<div className="container__forgotpassword">
				<div className="forgotpassword__wrapper">
					<div className="forgotpassword__wrapper--header">
						<img className="logostreet" src={Logo} alt=" " />
						<h1 className="header"> StreetWise Graphics </h1>
					</div>

					<div className="resetpass__header">
						<h1> Reset Password </h1>
					</div>
					<form onSubmit={handleSubmit}>
						<div className="forgotpassword__paragraph">
							<p className="havingtrouble__header">
								Having trouble signing in?
							</p>
							<div className="enteremail__paragraph--container">
								<p className="enteremail__paragraph">
									Enter your email and you'll receive an email with a link to
									return to your account.
								</p>
							</div>
						</div>

						<div className="container__userinputemail">
							<div className="inputemail__header">
								<div className="inputemail__header--container">
									<p className="inputemail__header--container-paragraph">
										E-mail:
									</p>

									<div className="inputemail__header--container-userinput">
										<input
											className="emailinput"
											type="email"
											placeholder="Enter your E-mail address"
											name="email"
											onChange={e => setEmail(e.target.value)}
											value={email}
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="error_message_container">
							{error && <div className="error_msg">{error}</div>}
							{message && <div className="message_msg">{message}</div>}
						</div>
						<div className="container__button--resetpass">
							<Buttons
								buttonSize="btn--medium"
								buttonStyle="btn--registerandlogs"
							>
								Reset password
							</Buttons>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Forgotpass;
