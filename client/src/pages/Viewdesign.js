import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Alldesigns } from "../assets/Alldesigns";
import "../styles/Viewdesign.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Viewdesign = () => {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);

	return (
		<>
			<Navbar />
			<div className="container__viewdesign">
				<div className="container__viewdesign--wrapper">
					{Alldesigns.map((item, index) => (
						<div key={index}>
							<div
								data-aos-once="true"
								data-aos="fade-up"
								className="container__graphicdesigns"
							>
								<div className="container__items">
									<img
										className="container__designitems"
										src={item.image}
										alt=""
									/>
									<div className="container__imgdetails">
										<span className="graphicdesign__name"> {item.name} </span>
										<span className="graphicdesign__description">
											{item.description}
										</span>
										<span className="graphicdesign__price"> {item.price} </span>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Viewdesign;
