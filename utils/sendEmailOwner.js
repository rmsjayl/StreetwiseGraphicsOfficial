const nodemailer = require("nodemailer");

module.exports = async (email, subject, html) => {
	try {
		const transporter = nodemailer.createTransport({
			host: process.env.HOST,
			service: process.env.SERVICE,
			port: Number(process.env.EMAIL_PORT),
			secure: Boolean(process.env.SECURE),
			auth: {
				user: process.env.USERNAME_GMAIL,
				pass: process.env.PASSWORD_GMAIL,
			},
		});

		await transporter.sendMail({
			from: process.env.USERNAME_GMAIL,
			to: process.env.OWNER_GMAIL,
			subject: subject,
			html: html,
		});

		console.log("Email was successfully sent");
	} catch (error) {
		console.log("Email failed to sent");
		console.log(error);
		return error;
	}
};
