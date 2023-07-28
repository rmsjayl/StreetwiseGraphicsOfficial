const router = require("express").Router();
const { Contact, validate } = require("../models/Contact");
const { User } = require("../models/Users");
const sendEmail = require("../utils/sendEmail");
const sendEmailOwner = require("../utils/sendEmailOwner");

router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);

		if (error)
			return res.status(400).send({ message: error.details[0].message });

		let user = await User.findOne({ email: req.body.email });

		contact = new Contact({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			date: req.body.date,
			email: req.body.email,
			time: req.body.time,
			phoneNumber: req.body.phoneNumber,
			reminder: req.body.reminder,
		});

		contact.save();

		const mail = `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<style>
				.container {
					background-color: #f05a43;
					border-radius: 15px;
					padding: 8px;
					width: 50%;
					justify-content: center;
				}

				.container-contact {
					background-color: #fff;
					border-radius: 15px;
					padding: 8px;
				}

				.container-wrapper-heading {
					border-radius: 15px;
					display: flex;
					padding: 8px;
					position: relative;
					right: 20px;
				}

				.container-wrapper-details {
					padding: 8px;
				}

				h1 {
					color: #000;
					font-family: "Dokdo";
					letter-spacing: 3px;
					text-transform: uppercase;
				}

				.companyname {
					font-size: 35px;
				}

				p {
					color: #000;
					font-weight: bold;
				}

				h3 {
					color: #000;
				}

				h4 {
					color: #000;
				}

				.header1 {
					text-transform: uppercase;
					font-size: 24px;
				}

				.para1 {
					font-size: 14px;
					text-align: center;
				}

				.text-appointment {
					font-size: 18px;
					font-weight: bold;
					text-transform: uppercase;
				}

				.container-wrapper-thankyou {
					text-align: center;
				}

				.container-wrapper-appointment {
					text-indent: 50px;
				}
			</style>
			<head>
			<body>
				<div class="container">
					<div class="container-contact">
						<div class="container-wrapper-heading">
								<img
									src="https://drive.google.com/uc?export=view&id=1jeww0QPkpH-h58_P5T78bN-sB6-epZKr"
									alt="logo"
									style="width: 90px; height: 90px"
									;
								/>
								<h1 class="companyname">Streetwise Graphics</h1>
						</div>
						<div class="container-wrapper-details">
							<p class="header1">Good day ${req.body.firstName} ${req.body.lastName}!</p>
							<p class="para1">
								Here is your appointment details to the owner of Streetwise Graphics
							</p>
								<p class="text-appointment"> Appointment Details </p>
								<div class="container-wrapper-appointment">
									<p><b>DATE:</b>  ${req.body.date}</p>
									<p><b>TIME:</b> ${req.body.time} <span style="font-size: 8px; font-weight: bold;">Issued in Military Time </span></p>
									<p><b>MOBILE NUMBER:</b>  ${req.body.phoneNumber}</p>
									<p><b>MESSAGE:</b>  ${req.body.reminder}</p>
								</div>
						</div>

						<div class="container-wrapper-thankyou">
							<p> Please wait for the response in the form of email or text messages from Jericho Robles, owner of Streetwise Graphics, for the confirmation of the appointment as he might have other schedules or not available. Jericho will provide a meeting link for you to have a place for conversation.</p>
							<h4> Thank you for choosing STREETWISE GRAPHICS! Have a good day ahead </h4>
							<h6> *This is an auto generated email please do not reply.* </h6>
						</div>
					</div>
				</div>
			</body>
		</html>
		`;
		await sendEmail(user.email, "Appointment Details", mail);

		const notify = `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<style>
				.container {
					background-color: #f05a43;
					border-radius: 15px;
					padding: 8px;
					width: 50%;
					justify-content: center;
				}

				.container-contact {
					background-color: #fff;
					border-radius: 15px;
					padding: 8px;
				}

				.container-wrapper-heading {
					border-radius: 15px;
					display: flex;
					padding: 8px;
					position: relative;
					right: 20px;
				}

				.container-wrapper-details {
					padding: 8px;
				}

				h1 {
					color: #000;
					font-family: "Dokdo";
					letter-spacing: 3px;
					text-transform: uppercase;
				}

				.companyname {
					font-size: 35px;
				}

				p {
					color: #000;
					font-weight: bold;
				}

				h3 {
					color: #000;
				}

				h4 {
					color: #000;
				}

				.header1 {
					text-transform: uppercase;
					font-size: 24px;
				}

				.para1 {
					font-size: 14px;
					text-align: center;
				}

				.text-appointment {
					font-size: 18px;
					font-weight: bold;
					text-transform: uppercase;
				}

				.container-wrapper-thankyou {
					text-align: center;
				}

				.container-wrapper-appointment {
					text-indent: 50px;
				}
			</style>
			<head>
			<body>
				<div class="container">
					<div class="container-contact">
						<div class="container-wrapper-heading">
								<img
									src="https://drive.google.com/uc?export=view&id=1jeww0QPkpH-h58_P5T78bN-sB6-epZKr"
									alt="logo"
									style="width: 90px; height: 90px"
									;
								/>
								<h1 class="companyname">Streetwise Graphics</h1>
						</div>
						<div class="container-wrapper-details">
							<p class="header1">good day mr. jericho robles!</p>
							<p class="para1">
								We are excited to announce that you have an appoinment to a client. Below are the details of the appointment.
							</p>
								<p class="text-appointment"> Appointment Details </p>
								<div class="container-wrapper-appointment">
									<p><b>FIRST NAME:</b>  ${req.body.firstName}</p>
									<p><b>LAST NAME:</b>  ${req.body.lastName}</p>
									<p><b>DATE:</b>  ${req.body.date}</p>
									<p><b>TIME:</b> ${req.body.time} <span style="font-size: 8px; font-weight: bold;">Issued in Military Time </span></p>
									<p><b>MOBILE NUMBER:</b>  ${req.body.phoneNumber}</p>
									<p><b>MESSAGE:</b>  ${req.body.reminder}</p>
								</div>
						</div>

						<div class="container-wrapper-thankyou">
							<p> Don't forget to send an invitation link to your client to confirm that you are available on the said date and time. You can contact your client through this email: ${req.body.email}</p>

							<h6> *This is an auto generated email please do not reply.* </h6>
						</div>
					</div>
				</div>
			</body>
		</html>
		`;

		await sendEmailOwner(
			process.env.OWNER_GMAIL,
			"Appointment Details",
			notify
		);

		res.status(201).send({
			message: "An appointment details was sent to your email account!",
		});
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;
