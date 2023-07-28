require("dotenv").config({ path: "./config.env" });
const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");

//mongoose connection
const connectDB = require("./config/db");
connectDB();

//middlewares
app.use(express.json());
app.use(cors());

//import routes
app.use("/api/users", require("./routes/users")); //register route
app.use("/api/auth", require("./routes/auth")); //login route
app.use("/api/passwordreset", require("./routes/passwordreset")); //password reset route
app.use("/api/users/contact", require("./routes/contact")); //contact route

//HEROKU DEPLOYMENT

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/client/build")));

	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "client", "build", "index.html"));
	});
} else {
	app.get("/", (req, res) => {
		res.send("Api Running");
	});
}

//SERVER PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
