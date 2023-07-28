import React, { useState, useEffect } from "react";
import mailreceipt from "../img/utilities/mailreceiptverified.png";
import invalidpagelogo from "../img/utilities/pagenotfound.png";
import { Link, useParams } from "react-router-dom";
import { Buttons } from "../assets/Buttons";
import "../styles/Verifyemail.css";
import axios from "axios";

const Emailverify = () => {
	const [validUrl, setValidUrl] = useState(false);
	const param = useParams();

	useEffect(() => {
		const verifyEmailUrl = async () => {
			try {
				const url = `https://streetwisegraphicsofficial.herokuapp.com/api/users/${param.id}/verify/${param.token}`;
				const { data } = await axios.get(url);
				console.log(data);
				setValidUrl(true);
			} catch (error) {
				console.log(error);
				setValidUrl(false);
			}
		};
		verifyEmailUrl();
	}, [param]);

	return (
		<>
			{validUrl ? (
				<>
					<div className="container__emailverify">
						<div className="container__emailverify--wrapper">
							<img src={mailreceipt} alt="" className="success_img" />
							<h2> EMAIL VERIFICATION SUCCESSFULLY </h2>

							<div className="container--paragraph__verifysuccess">
								<p>
									Your account has been successfully verified. You are now
									officially part of our community! Thank you for choosing
									Streetwise Graphics .
									<br />
									<br />
									<span className="loginyouracc--text">
										PLEASE LOG IN YOUR ACCOUNT.
									</span>
								</p>
							</div>

							<div className="container--login">
								<Link to="/login">
									<Buttons
										buttonSize="btn--registerlogins"
										buttonStyle="btn--registersandlogs"
									>
										Log In
									</Buttons>
								</Link>
							</div>
						</div>
					</div>
				</>
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

export default Emailverify;
