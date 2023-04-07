// conected to database using mongodb and mongoose
const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      "Database connected: ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;
