import { useState, useEffect } from "react";
import Logo from "../img/logos/blacktransp.png";
import "../styles/Passwordreset.css";
import { Buttons } from "../assets/Buttons";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import invalidpagelogo from "../img/utilities/pagenotfound.png";

const Passwordreset = () => {
	const [validUrl, setValidUrl] = useState(false);
	const [password, setPassword] = useState("");
	const [confirmpassword, setConfirmPassword] = useState("");
	const [message, setMessage] = useState("");
	const [error, setError] = useState("");
	const param = useParams();
	const url = `https://streetwisegraphicsofficial.herokuapp.com/api/passwordreset/${param.id}/${param.token}`;

	useEffect(() => {
		const verifyUrl = async () => {
			try {
				await axios.get(url);
				setValidUrl(true);
			} catch (error) {
				setValidUrl(false);
			}
		};
		verifyUrl();
	}, [param, url]);

	const handleSubmit = async e => {
		e.preventDefault();

		if (password !== confirmpassword) {
			setTimeout(() => {
				setError("");
			}, 3000);
			return setError("Passwords do not match");
		}

		try {
			const { data } = await axios.post(url, { password });
			setMessage(data.message);
			setError("");
			window.location = "/login";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
				setMessage("");
				setTimeout(() => {
					setError("");
				}, 3000);
			}
		}
	};
	return (
		<>
			{validUrl ? (
				<div className="container__forgotpassword">
					<div className="forgotpassword__wrapper">
						<div className="forgotpassword__wrapper--header">
							<img className="logostreet" src={Logo} alt=" " />
							<h1 className="header"> StreetWise Graphics </h1>
						</div>

						<div className="resetpass__header">
							<h1> PASSWORD RESET </h1>
						</div>
						<form onSubmit={handleSubmit}>
							<div className="forgotpassword__paragraph">
								<p className="havingtrouble__header">
									Enter your new password below
								</p>
								<div className="enterforgotpass__paragraph--container">
									<p className="enterforgotpass__paragraph">
										You forgot your password. Please enter a new password below
										to be able to access our website.
									</p>
								</div>
							</div>

							<div className="container__userinputforgotpass">
								<div className="inputforgotpass__header">
									<div className="inputforgotpass__header--container">
										<p className="inputforgotpass__header--container-paragraph">
											Password:
										</p>

										<div className="inputforgotpass__header--container-userinput">
											<input
												className="forgotpassinput"
												type="password"
												placeholder="Enter your new password"
												name="password"
												onChange={e => setPassword(e.target.value)}
												value={password}
											/>
										</div>
									</div>
								</div>
							</div>

							<div className="container__userinputconfirmforgotpass">
								<div className="inputconfirmforgotpass__header">
									<div className="inputconfirmforgotpass__header--container">
										<p className="inputconfirmforgotpass__header--container-paragraph">
											Confirm password:
										</p>

										<div className="inputconfirmforgotpass__header--container-userinput">
											<input
												className="confirmforgotpassinput"
												type="password"
												placeholder="Confirm new password"
												name="confirmforgotpass"
												onChange={e => setConfirmPassword(e.target.value)}
												value={confirmpassword}
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
									Submit
								</Buttons>
							</div>
						</form>
					</div>
				</div>
			) : (
				<>
					<div className="container__pagenotfound">
						<div className="container__pagenotfound--wrapper">
							<div className="pagenotfound__container">
								<div className="pagenotfoundlogo"> 404:</div>
								<div className="pagenotfoundtext">Page not found</div>
							</div>
							<div className="pagenotfound__container">
								<div className="pagenotfoundparagraph">
									sorry! Looks like the page you are looking for does not exist.
									<br />
									<br />
									<Link to="/login">
										<Buttons
											buttonSize="btn--registerlogins"
											buttonStyle="btn--registersandlogs"
										>
											Back to Log In
										</Buttons>
									</Link>
								</div>

								<div className="container--login"></div>
								<div className="pagenotfoundimage">
									<img
										className="invalidrobotlogo"
										src={invalidpagelogo}
										alt=""
									/>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default Passwordreset;
