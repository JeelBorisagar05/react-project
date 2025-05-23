const mongoose = require("mongoose");
const URI=process.env.MONGODB_URI;

//const URI = "mongodb://localhost:27017/mern_admin";

const connectDb = async () => {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connection successful to database");
    } catch (error) {
        console.error("Database connection failed", error);
        process.exit(0); // Use exit(1) instead of exit(0) to indicate failure
    }
};

module.exports = connectDb;
