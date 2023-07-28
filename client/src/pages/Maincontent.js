import React, { useState, useRef, useEffect } from "react";
//FOR CASCADING STYLE SHEETS
import "../styles/Maincontent.css";
//FOR BACKGROUNDS
import classyTextbg from "../img/backgrounds/imgtext.png";
import michaelAngelo from "../img/michaelangelo/newpic.png";
import michaelAngeloYellow from "../img/michaelangelo/pictranspred.png";
import michaelAngeloWhite from "../img/michaelangelo/pictranspwhite.png";
import BackgroundImage from "../img/backgrounds/background.png";
//FOR SVGs
import mailicon from "../img/svg/mail.svg";
import arrow from "../img/svg/arrowright.svg";
//FOR ANIMATION
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
//FOR DESIGN IMAGES
import Newdesign from "../assets/Newdesign";
import Featureddesign from "../assets/Featureddesign";
import Shirts from "../assets/Shirts";
//FOR BUTTONS
import { Buttons } from "../assets/Buttons";
//FOR REACT-ROUTER-DOM
import { Link } from "react-router-dom";
import { Link as ScrollTo } from "react-scroll";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Maincontent = () => {
	const linkStyle = {
		color: "#000",
	};

	//hello wrold

	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);

	const [width, setWidth] = useState(0);
	const carousel = useRef();

	useEffect(() => {
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
	}, []);

	return (
		<>
			<Navbar />
			<div className="container-content">
				<div className="container-content__text">
					<h1 className="content__owner"> Jericho Robles </h1>
					<h1 className="content__company"> StreetWise Graphics </h1>
				</div>

				<img
					className="classytext"
					src={classyTextbg}
					alt="this is a background classy TEXT"
				/>

				<div className="michaelangelo__pic">
					<img
						className="michaelangelo"
						id="michaelangeloorig"
						src={michaelAngelo}
						alt="michaelangelo sculpture"
					/>
					<img
						className="michaelangelo"
						id="michaelangeloyellow"
						src={michaelAngeloYellow}
						alt="michaelangelo sculpture"
					/>
					<img
						className="michaelangelo"
						id="michaelangelowhite"
						src={michaelAngeloWhite}
						alt="michaelangelo sculpture"
					/>
				</div>

				<div className="content-paragraph">
					<p>
						Discover various original and amazing designs. Determined to work
						and collaborate with big companies, driven with high quality
						services and unique design concepts. The quality that never goes out
						of style.
					</p>
				</div>
			</div>

			<div data-aos-once="true" data-aos="fade-up" className="Newarrivals">
				<h1 className="header__text"> Designs </h1>
				<motion.div
					ref={carousel}
					className="carousel"
					whileTap={{ cursor: "grabbing" }}
				>
					<motion.div
						drag="x"
						dragConstraints={{ right: 0, left: -width }}
						className="inner-carousel"
					>
						{Newdesign.map(image => {
							return (
								<motion.div className="newdesigns--image" key={image}>
									<img src={image} alt="" />
								</motion.div>
							);
						})}
					</motion.div>
				</motion.div>

				<div className="btn--viewall">
					<Buttons
						type="button"
						buttonStyle="btn--primary__solid"
						buttonSize="btn--medium"
					>
						<Link style={{ color: "#fff" }} to="/designpage">
							GO TO DESIGNS PAGE
						</Link>
					</Buttons>
				</div>
			</div>

			<div data-aos-once="true" data-aos="fade-up" className="Newarrivals">
				<h1 className="header__text"> Featured Design </h1>
				<motion.div
					ref={carousel}
					className="carousel"
					whileTap={{ cursor: "grabbing" }}
				>
					<motion.div
						drag="x"
						dragConstraints={{ right: 0, left: -width }}
						className="inner-carousel"
					>
						{Featureddesign.map(image => {
							return (
								<motion.div className="newdesigns--image" key={image}>
									<img src={image} alt="" />
								</motion.div>
							);
						})}
					</motion.div>
				</motion.div>
			</div>

			<div data-aos-once="true" data-aos="fade-up" className="Newarrivals">
				<h1 className="header__text"> t-shirt prints </h1>
				<motion.div
					ref={carousel}
					className="carousel"
					whileTap={{ cursor: "grabbing" }}
				>
					<motion.div
						drag="x"
						dragConstraints={{ right: 0, left: -width }}
						className="inner-carousel"
					>
						{Shirts.map(image => {
							return (
								<motion.div className="newdesigns--image" key={image}>
									<img src={image} alt="" />
								</motion.div>
							);
						})}
					</motion.div>
				</motion.div>
			</div>

			<div className="container--midpart">
				<img src={BackgroundImage} className="background--midpart" alt="" />
				<div data-aos-once="true" data-aos="fade-up" className="midpart-text">
					<p className="midpart__paragraph">
						<span className="design__text"> STREETWISE GRAPHICS </span> is the
						fruit of <span className="design__text"> JERICHO ROBLES' </span>
						idea, vision, and creativity. He were able to reach out and showcase
						the young in everyone they met, as well as favorably impact people
						who believe in what he do, with exceptional messages and
						<span className="design__text"> DISTINCT CREATIVITY </span> in each
						design he make.
					</p>
				</div>
			</div>

			<div className="container--followus">
				<ScrollTo to="socialmedia__links" smooth duration={1500}>
					<Buttons
						type="button"
						buttonStyle="btn--primary__solid"
						buttonSize="btn--medium"
					>
						Follow Us
					</Buttons>
				</ScrollTo>
			</div>

			<div className="divider--line">
				<div className="div--line"> </div>
			</div>

			<div
				data-aos-once="true"
				data-aos="fade-up"
				className="container--botpart"
			>
				<p className="botpart__paragraph">
					<span>STREETWISE GRAPHICS</span> has never stopped pushing ahead, and
					have kept growing through expanding their connections for each
					individual and the community as a <span> WHOLE.</span>
				</p>
			</div>

			<div
				data-aos-once="true"
				data-aos="fade-up"
				className="container__contactlink"
			>
				<h1 className="graphic__designer"> Need a graphic designer? </h1>
			</div>

			<div
				data-aos-once="true"
				data-aos="fade-up"
				className="container__contactlink--texts"
			>
				<h3 className="worry"> Worry no more </h3>
				<h1 className="work__together"> Lets work together! </h1>
			</div>

			<Link style={linkStyle} to="/contact">
				<div
					data-aos-once="true"
					data-aos="fade-up"
					className="contactlink--icons"
				>
					<img className="mail-icon" src={mailicon} alt="this is a mail icon" />
					<div className="link">
						<h3 className="contactlink__text">Email and set an appointment</h3>
					</div>
					<img className="arrow-icon" src={arrow} alt="this is an arrow icon" />
				</div>
			</Link>
			<Footer />
		</>
	);
};

export default Maincontent;
