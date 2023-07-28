import React, { useEffect } from "react";
import "../styles/About.css";
import Jeck from "../assets/Jeck";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Clients from "../assets/Clients";
import mailiconwhite from "../img/svg/mailwhite.svg";
import arrowrightwhite from "../img/svg/arrowrightwhite.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const About = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
		});
	}, []);

	const linkStyles = {
		color: "#fff",
	};

	return (
		<>
			<Navbar />
			<div className="container__about">
				<div className="imgcontainer__jeckr">
					<img src={Jeck.jeck1} className="jeckr1" alt="" />
					<img src={Jeck.jeck2} className="jeckr2" alt="" />
					<img src={Jeck.jeck3} className="jeckr3" alt="" />
					<div className="circle"> </div>
				</div>

				<div className="about__paragraph--wrapper">
					<div className="paragraph">
						<p className="understanding__paragraph">
							Understanding what aspects of a design pique your attention as an
							observer teaches you a lot about yourself as a designer. I became
							more conscious of the creativity all around me as time passed, and
							I would periodically study and research the designers/artists
							behind such creations in order to fuel my creative curiosity.
						</p>
					</div>

					<div className="line-breaker__one"> </div>

					<div className="paragraph__two--text">
						<p className="understanding__paragraph--other">
							My daily rough sketches act as reminders to me to build on my
							potential ideas further, and I occasionally use them as a basic
							scope to begin creating an envisioned concept.
						</p>
					</div>

					<div className="line-breaker__two"> </div>
				</div>

				<div
					data-aos-once="true"
					data-aos="fade-up"
					className="container__satisfied--client"
				>
					<div className="satisfied--clients__header">
						<h1> Satisfied Client </h1>
					</div>

					<div className="container__client--image">
						<div
							data-aos-once="true"
							data-aos="fade-right"
							class="container--clients__card1"
						>
							<img
								src={Clients.client1}
								className="clientpics"
								id="client1"
								alt=""
							/>
						</div>

						<div
							data-aos-once="true"
							data-aos="fade-left"
							class="container--clients__card2"
						>
							<img
								src={Clients.client2}
								className="clientpics"
								id="client2"
								alt=""
							/>
						</div>

						<div
							data-aos-once="true"
							data-aos="fade-right"
							class="container--clients__card3"
						>
							<img
								src={Clients.client3}
								className="clientpics"
								id="client3"
								alt=""
							/>
						</div>

						<div
							data-aos-once="true"
							data-aos="fade-left"
							class="container--clients__card4"
						>
							<img
								src={Clients.client4}
								className="clientpics"
								id="client4"
								alt=""
							/>
						</div>

						<div
							data-aos-once="true"
							data-aos="fade-up"
							class="container--clients__card5"
						>
							<img
								src={Clients.client5}
								className="clientpics"
								id="client5"
								alt=""
							/>
						</div>

						<div
							data-aos-once="true"
							data-aos="fade-right"
							class="container--clients__card6"
						>
							<img
								src={Clients.client6}
								className="clientpics"
								id="client6"
								alt=""
							/>
						</div>

						<div
							data-aos-once="true"
							data-aos="fade-left"
							class="container--clients__card7"
						>
							<img
								src={Clients.client7}
								className="clientpics"
								id="client7"
								alt=""
							/>
						</div>

						<div
							data-aos-once="true"
							data-aos="fade-left"
							class="container--clients__card8"
						>
							<img
								src={Clients.client8}
								className="clientpics"
								id="client8"
								alt=""
							/>
						</div>
					</div>

					<div
						data-aos-once="true"
						data-aos="fade-up"
						className="container__services"
					>
						<div className="row">
							<div className="tools__used">
								<h1 className="tools"> Tools used</h1>
								<div className="bar"> </div>

								<div className="paragraph__container">
									<p>
										Photoshop / Illustrator / Lightroom / Sketch / Invision /
									</p>
								</div>
							</div>

							<div className="design__services">
								<h1 className="services"> Design Services </h1>
								<div className="bar"> </div>

								<div className="paragraph__container">
									<p>
										video editor / graphic designer / logomaker / iconography /
									</p>
								</div>
							</div>
						</div>
					</div>

					<div data-aos-once="true" data-aos="fade-up" className="line-breaker">
						<div className="line-breaker__bar"> </div>
					</div>

					<div
						data-aos-once="true"
						data-aos="fade-up"
						className="container__contactlink--about"
					>
						<h1 className="about--graphic__designer">
							Need a graphic designer?
						</h1>
					</div>

					<div
						data-aos-once="true"
						data-aos="fade-up"
						className="container__contactlink--texts--about"
					>
						<h3 className="about--worry"> Worry no more </h3>
						<h1 className="about--work__together"> Lets work together! </h1>
					</div>

					<div
						data-aos-once="true"
						data-aos="fade-up"
						className="contactlink--icons--about"
					>
						<Link style={linkStyles} to="/contact">
							<div className="containerlinks">
								<img
									className="about--mail-icon"
									src={mailiconwhite}
									alt="this is a mail icon"
								/>
								<h3 className="about--contactlink__text">
									Email and set an appointment
								</h3>
								<img
									className="about--arrow-icon"
									src={arrowrightwhite}
									alt="this is an arrow icon"
								/>
							</div>
						</Link>
					</div>

					<div
						data-aos-once="true"
						data-aos="fade-up"
						className="contact--container"
					>
						<div className="contact--container__header">
							<h1> Contact </h1>
							<div className="bar__contact"> </div>
							<h1 className="info"> Information </h1>

							<div className="contact--container__texts">
								<p>
									I'm very excited to work with this project of yours! Such a
									grateful feeling to be part of your team.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default About;
