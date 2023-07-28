import React, { useEffect, useState } from "react";
import "../styles/Contact.css";
import Bgstreetwise from "../img/backgrounds/background.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ContactMailicon from "../img/svg/mailwhite.svg";
import Aos from "aos";
import "aos/dist/aos.css";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const Contact = () => {
	const [error, setError] = useState("");
	const [message, setmessage] = useState("");
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		date: "",
		time: "",
		phoneNumber: "",
		email: "",
		reminder: "",
	});

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const url =
				"https://streetwisegraphicsofficial.herokuapp.com/api/users/contact";
			const { data: res } = await axios.post(url, data);
			setmessage(res.message);

			setTimeout(() => {
				setmessage("");
			}, 8000);
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

	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);

	return (
		<>
			<Navbar />
			<div className="container__contact--div">
				<div className="container__streetwiseimage">
					<div className="container-img">
						<img
							src={Bgstreetwise}
							alt=""
							className="imagestreetwise"
							data-aos="fade-right"
						/>
					</div>

					<div className="container--letters">
						<div data-aos="zoom-in-down" className="container--firstlayer">
							<p className="letters">
								lw <span className="firstlayerspan"> tt </span>
							</p>
						</div>
						<div data-aos="zoom-in-down" className="container--secondlayer">
							<p className="letters">
								eo <span className="secondlayerspan"> oh </span>
							</p>
						</div>
						<div data-aos="zoom-in-down" className="container--thirdlayer">
							<p className="letters">
								tr <span className="thirdlayerspan"> ge </span>
							</p>
							<span className="quotation"> ' </span>
						</div>
						<div data-aos="zoom-in-down" className="container--fourthlayer">
							<p className="letters">
								sk <span className="fourthlayerspan"> er </span>
							</p>
						</div>
					</div>
				</div>

				<div className="container__contact--wrapper">
					<div className="row__contact">
						<div className="contact__details">
							<div className="contact__details--detail">
								<h1> get in touch </h1>
								<div className="divider__getintouch"> </div>
								<h1 className="lets"> Let's </h1>
								<h1 className="worktogether"> Work together </h1>
							</div>

							<div className="contact__details--info">
								<p> JERICHO ROBLES </p>
								<p> SAN MATEO, SOUTHERN LUZON, RIZAL </p>
								<p> PHILIPPINES </p>
							</div>

							<div className="contact__contact--container">
								<div className="contact__contact--container__header">
									<h1> Contact </h1>
									<div className="bar__contact"> </div>
									<h1 className="info"> Information </h1>

									<div className="contact__contact--container__texts">
										<p>
											I'm very excited to work with this project of yours! Such
											a grateful feeling to be part of your team.
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="contact__form">
							<div className="contact__form--details">
								<h1>
									Got a project? Drop me a line if you want to work together on
									something exciting. Big or small.
								</h1>
							</div>
							<form onSubmit={handleSubmit}>
								<div className="contact__form--inputname">
									<div className="inputnames">
										<div className="details__input">
											<h1 className="inputfirstname__header"> First Name: </h1>
											<input
												className="userinputdetails"
												type="text"
												placeholder="Enter your First Name"
												name="firstName"
												value={data.firstName}
												onChange={handleChange}
											/>
										</div>

										<div className="enterlastname">
											<h1 className="inputlastname__header"> Last Name: </h1>
											<input
												className="userinputdetails"
												type="text"
												placeholder="Enter your Last Name"
												name="lastName"
												value={data.lastName}
												onChange={handleChange}
											/>
										</div>
									</div>
								</div>
								<div className="dateandtime__container">
									<div className="dateandtime">
										<h1> Date and Time: </h1>
										<div className="dateandtimecontainer">
											<input
												className="selectdatetime"
												min={new Date().toISOString().slice(0, 10)}
												type="date"
												name="date"
												value={data.date}
												onChange={handleChange}
											/>

											<div className="selectdatetime__container">
												<input
													className="selectdatetime"
													type="time"
													name="time"
													value={data.time}
													onChange={handleChange}
												/>
											</div>
										</div>
									</div>
								</div>

								<div className="usercontact__details">
									<div className="container__contactdetails">
										<div className="contactdet__row">
											<div className="contactdet__phonenum">
												<h1> Phone Number: </h1>
												<input
													className="userinputdetails"
													type="text"
													placeholder="Valid Mobile Number"
													name="phoneNumber"
													value={data.phoneNumber}
													onChange={handleChange}
												/>
											</div>

											<div className="contactdet__email">
												<h1> E-Mail:</h1>
												<input
													className="userinputdetails"
													type="text"
													placeholder="Your Personal E-mail"
													name="email"
													value={data.email}
													onChange={handleChange}
												/>
											</div>
										</div>
									</div>
								</div>

								<div className="container__message">
									<div className="container__message--header">
										<h1> Message </h1>
										<div className="messageholder">
											<input
												className="userinput__message"
												type="text"
												placeholder="Leave me a short message..."
												name="reminder"
												value={data.reminder}
												onChange={handleChange}
											/>
										</div>
									</div>
								</div>

								<div className="error_message_container">
									{error && <div className="error_msg--contact">{error}</div>}
									{message && (
										<div className="msg--contact">
											Congratulations! You have Successfully created an
											appointment to JERICHO, owner of STREETWISE GRAPHICS{" "}
										</div>
									)}
								</div>

								<div className="container__sendmessage">
									<div className="send__message">
										<button className="sendform"> Send Message </button>
										<img src={ContactMailicon} className="mailicon__contact" />
										<div className="send__message--bar"> </div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Contact;
