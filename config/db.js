const mongoose = require("mongoose");

const connectDB = async () => {
	await mongoose.connect(process.env.MONGOOSE_CONNECTION, {
		useNewUrlparser: true,
		useUnifiedTopology: true,
	});

	console.log("MongoDB connection established...");
};

module.exports = connectDB;
