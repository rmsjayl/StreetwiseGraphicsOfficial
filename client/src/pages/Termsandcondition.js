import React, { useEffect } from "react";
import "../styles/Termsandcondition.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";

const Termsandcondition = () => {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);

	return (
		<>
			<Navbar />

			<div className="container--content">
				<div className="header__termsandconditions">
					<h1 className="termsandcondition"> Terms & Conditions: </h1>
					<h1 className="pleaseread"> Please read </h1>
				</div>

				<div className="paragraph__pleaseread">
					<p className="pleasread__text">
						Note that we run a first come and first serve policy. If you want
						the commission to be finished at a certain date, FULL PAYMENT
						upfront must be paid, this will push your commission to the top of
						the list to ensure your commission is completed on time. Please
						allow atleast 7 days for the commission to be done.
					</p>
				</div>

				<div className="header__prices">
					<h1 className="pricesandhowto"> Prices and How to </h1>
				</div>

				<div className="paragraph__pricesandhowto">
					<p className="pricesandhowto__text">
						We take payments via PayPal or GCash ONLY To place an order, choose
						one of the following options:
					</p>
				</div>

				<div className="options__content">
					<div className="option1__content">
						<h1 className="option"> Option 1:</h1>
						<p className="option1__paragraph">
							If you want your commission to be done at a certain date, paying
							in full is a MUST. This will put your commission order to the top
							of the list.
						</p>
					</div>

					<div className="option2__content">
						<h1 className="option"> Option 2:</h1>
						<p className="option2__paragraph">
							Deposit atleast 50% of the commission rate and pay the outstanding
							balance AFTER the design is approved before the files are sent.
							Choose this option if you are happy to wait and do not have a
							deadline.
						</p>
					</div>
				</div>

				<div className="content__details">
					<div className="gcashpayment">
						<p className="gcash"> GCash - 09776762895 (Jericho G. Robles) </p>
					</div>

					<div className="paypalpayment">
						<p className="paypal">
							PayPal-roblesjeck25@gmail.com or paypal.me/jeckrrr
						</p>
					</div>
				</div>

				<div className="thankyou">
					<p className="thankyou__text">
						Thank you for trusting Streetwise Graphics. Have a nice day!
					</p>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Termsandcondition;
