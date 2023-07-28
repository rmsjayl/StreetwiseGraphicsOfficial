const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const UserSchema = new mongoose.Schema({
	email: { type: String, required: true, unique: true },
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	mobileNum: { type: String, required: true },
	companyName: { type: String, required: true },
	verified: { type: Boolean, default: false },
});

UserSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWT_PRIVATEKEY, {
		expiresIn: process.env.JWT_EXPIRES,
	});

	return token;
};

const User = mongoose.model("User", UserSchema);

const validate = data => {
	const schema = Joi.object({
		firstName: Joi.string().required().min(2).max(25).label("First Name"),
		lastName: Joi.string().required().min(2).max(15).label("Last Name"),
		username: Joi.string().required().label("Username"),
		email: Joi.string().email().required().label("Email"),
		mobileNum: Joi.string()
			.length(11)
			.regex(/^\d+$/)
			.required()
			.label("Mobile Number"),
		companyName: Joi.string().min(3).max(40).required().label("Company Name"),
		password: passwordComplexity().required().label("Password"),
		confirmpassword: Joi.ref("password"),
	});
	return schema.validate(data);
};

module.exports = { User, validate };
