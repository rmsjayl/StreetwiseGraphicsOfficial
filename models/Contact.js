const mongoose = require("mongoose");
const Joi = require("joi");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
	firstName: {
		type: String,
		required: true,
	},
	date: {
		type: String,
		required: true,
	},
	time: {
		type: String,
		required: true,
	},
	phoneNumber: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	reminder: {
		type: String,
		required: true,
	},
});

const Contact = mongoose.model("Contact", ContactSchema);

const validate = data => {
	const schema = Joi.object({
		firstName: Joi.string().required().min(2).max(25).label("First Name"),
		lastName: Joi.string().required().min(2).max(25).label("Last Name"),
		date: Joi.date().required().label("Date"),
		time: Joi.string().required().label("Time"),
		phoneNumber: Joi.string()
			.length(11)
			.regex(/^\d+$/)
			.required()
			.label("Mobile Number"),
		email: Joi.string().email().required().label("Email"),
		reminder: Joi.string().required().label("Message"),
	});
	return schema.validate(data);
};

module.exports = { Contact, validate };
