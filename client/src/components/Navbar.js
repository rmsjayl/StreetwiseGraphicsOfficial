import React, { useState } from "react";
import "../styles/Navbar.css";
import companyLogo from "../img/logos/whitetransp.png";
import { Link } from "react-router-dom";
import { Buttons } from "../assets/Buttons";

const Navbar = () => {
	const linkStyle = {
		color: "black",
	};

	const [openNav, setOpen] = useState(false);

	const toggleNavbar = () => {
		setOpen(!openNav);
	};

	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<>
			<img
				src={companyLogo}
				alt="Streetwise Graphics official Logo"
				className="companyLogo"
			/>

			<Link style={linkStyle} to="/content">
				<div className="container-company">
					<h1 className="companyName"> StreetWise Graphics </h1>
					<h1 className="owner"> Jericho Robles </h1>
				</div>
			</Link>

			<div className="navbar">
				<div className="menubar" id={openNav ? "open" : "close"}>
					<ul className="links">
						<Link style={linkStyle} to="/content">
							<li className="pagetab">Main Content</li>
						</Link>

						<Link style={linkStyle} to="/designpage">
							<li className="pagetab">Design page</li>
						</Link>

						<Link style={linkStyle} to="/aboutme">
							<li className="pagetab">About me</li>
						</Link>

						<Link style={linkStyle} to="/contact">
							<li className="contactpagetab">Contact</li>
						</Link>

						<Link style={linkStyle} to="/termsandconditions">
							<li className="pagetab">
								Terms
								<span className="and"> and </span>
								Conditions
							</li>
						</Link>
						<Buttons
							onClick={handleLogout}
							buttonSize="btn--registerlogins"
							buttonStyle="btn--registersandlogs"
						>
							Log Out
						</Buttons>
					</ul>
				</div>
			</div>

			<div className="hamburger">
				<div
					onClick={toggleNavbar}
					className={
						openNav ? "hamburger__menu--open" : "hamburger__menu--close"
					}
				>
					<div className="bar1"> </div>
					<div className="bar2"> </div>
					<div className="bar3"> </div>
					<div className="bar4"> </div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
