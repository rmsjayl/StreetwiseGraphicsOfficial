import React, { useState, useEffect } from "react";
import "../styles/Faq.css";
import Logo from "../img/logos/whitetransp.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Faqdata } from "../assets/Faqdata";
import Aos from "aos";
import "aos/dist/aos.css";

const Faqs = () => {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);

	const [toggle, setToggle] = useState("false");

	const toggleOpen = index => {
		if (toggle === index) {
			return setToggle(null);
		}

		setToggle(index);
	};

	return (
		<>
			<Navbar />
			<div className="container--content__faq">
				<div className="container--faqs">
					<img src={Logo} className="logofaqs" alt="" />
				</div>

				<div className="accordion-container">
					<div data-aos="fade-up" className="faq__header">
						<div className="header__faq">
							<h1> Frequently asked questions </h1>
						</div>

						<div className="header__answeryourquestion">
							<h1> Let's answer your questions</h1>
						</div>
					</div>

					<div data-aos="fade-left" className="accordion__wrapper">
						{Faqdata.map((item, index) => (
							<div key={index}>
								<div
									onClick={() => toggleOpen(index)}
									className="container--visible"
								>
									<div
										className={
											toggle === index
												? "faq--container__questions--active"
												: "faq--container__questions--inactive"
										}
									>
										<span className="faq__question">{item.question} </span>
									</div>

									<div
										className={
											toggle === index
												? "container__answer--show"
												: "container_answer--hide"
										}
									>
										<span className="faq__answer">{item.answer} </span>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Faqs;
