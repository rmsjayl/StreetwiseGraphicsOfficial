const router = require("express").Router();
const { User, validate } = require("../models/Users");
const bcrypt = require("bcryptjs");
const Token = require("../models/token");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");

router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);

		if (error)
			return res.status(400).send({ message: error.details[0].message });

		let userEmail = await User.findOne({
			email: req.body.email,
		});

		if (userEmail)
			return res
				.status(409)
				.send({ message: `User with given email already exists!` });

		let userUsername = await User.findOne({
			username: req.body.username,
		});

		if (userUsername)
			return res
				.status(409)
				.send({ message: `User with given username already exists!` });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		user = await new User({ ...req.body, password: hashPassword }).save();

		const token = await new Token({
			userId: user._id,
			token: crypto.randomBytes(32).toString("hex"),
		}).save();

		const message = `<h1>EMAIL ACCOUNT VERIFICATION: </h1>
		<h3>PLEASE VERIFY YOUR EMAIL ADDRESS BY CLICKING THIS LINK:</h3><strong>${process.env.BASE_URL}/users/${user._id}/verify/${token.token}</strong>`;

		await sendEmail(user.email, "EMAIL VERIFICATION", message);

		res.status(201).send({
			message: "A verification code was sent to your account! Please verify.",
		});
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

router.get("/:id/verify/:token", async (req, res) => {
	try {
		const user = await User.findOne({ _id: req.params.id });
		if (!user) return res.status(400).send({ message: "Link is invalid" });

		const token = await Token.findOne({
			userId: user._id,
			token: req.params.token,
		});
		if (!token) return res.status(400).send({ message: "Link is invalid" });

		await User.updateOne({ _id: user._id }, { verified: true });
		await token.remove();

		res
			.status(200)
			.send({ message: "Email verification was successfully done" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;
