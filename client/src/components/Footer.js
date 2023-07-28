import React, { useEffect } from "react";
import "../styles/Footer.css";
import logo from "../img/logos/whitetransp.png";
import instagramicon from "../img/svg/instagram.svg";
import facebookicon from "../img/svg/facebook.svg";
import messengericon from "../img/svg/messenger.svg";
import { Link } from "react-router-dom";
import AOS from "aos";

const Footer = () => {
	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

	const linkStyles = {
		color: "#fff",
		textDecoration: "none",
	};

	return (
		<>
			<div className="container--company">
				<div className="container--company__streetwise">
					<img
						className="companylogo"
						src={logo}
						alt="this is the company logo"
					/>
					<h1 className="companyname"> StreetWise Graphics </h1>
				</div>

				<div
					data-aos-once="true"
					data-aos="fade-up"
					className="container--paragraph"
				>
					<div className="paragraph__team">
						<h1 className="theteam"> The team behind creating this website </h1>
						<ul className="members">
							<li>Joshua "Fuji" Cabangal </li>
							<li> Miguel "Miggy" Tan </li>
							<li> emmanouel "emman" exala </li>
							<li> Enrico "rico" alfonso </li>
							<li> reena "ree-ree" perlas </li>
							<li> jay lord "jolo" ramos </li>
							<li> rho chryzler "rho" collado </li>
							<li> karl christian "karl" oyson </li>
							<li> daniel aaron "villy" villarama </li>
						</ul>
					</div>

					<div
						data-aos-once="true"
						data-aos="fade-up"
						className="paragraph__texts"
					>
						<div className="paragraphs">
							<div className="paragraph__one">
								Streetwise Graphics operates within the constraints of the
								client's budget. This is related to time management abilities,
								since we must finish a project within the time limit and budget
								established by our client. Moreover, Streetwise Graphics reply
								swiftly to modification requests.
							</div>

							<div className="paragraph__two">
								Streetwise Graphics' primary goals and objectives is to create a
								project that is tailored to a client's specific demands. We,
								reach out our client to identify the project's general
								objective, purpose, and intended appearance before commencing
								the design process.
							</div>

							<div className="paragraph__three">
								Streetwise Graphics tends to forecast various of amazing designs
								which portrays deep meanings. It provides high quality and
								detailed designs for the purpose of executing a superb graphic
								designs. Throughout the designing process Streetwise Graphics is
								responsible for the font styles, artwork, color palettes, and
								other aspects for the project.
							</div>
						</div>
					</div>
				</div>

				<div className="credits">
					&copy; {new Date().getFullYear()} StreetWise Graphics. All rights
					reserved.
					<div className="row">
						<div className="row__section">
							<div className="section1-div">
								<Link style={linkStyles} to="/termsandcondition">
									<p className="section1"> Terms and Conditions </p>
								</Link>
							</div>

							<div className="section2-div">
								<Link style={linkStyles} to="/aboutme">
									<p className="section2"> About Me </p>
								</Link>
							</div>

							<div className="section2-div">
								<Link style={linkStyles} to="/frequentlyaskedquestions">
									<p className="section3"> FAQs </p>
								</Link>
							</div>
						</div>

						<div
							data-aos-once="true"
							data-aos="fade-right"
							className="socialmedia__links"
							id="soc--med__links"
						>
							<h1>Connect With us:</h1>
							<div className="animation">
								<a href="https://www.facebook.com/StreetwiseGraphics">
									<img
										className="icons"
										src={facebookicon}
										alt="facebook icon"
									/>
								</a>
								<a href="https://www.instagram.com/streetwisegraphics/">
									<img
										className="icons"
										src={instagramicon}
										alt="instagram icon"
									/>
								</a>
								<a href="https://www.facebook.com/messages/t/105775774537291">
									<img
										className="icons"
										src={messengericon}
										alt="messenger icon"
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
