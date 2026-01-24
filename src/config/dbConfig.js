import mongoose from "mongoose";

export const connectDB = async (params) => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Database Connected Successfully!");
    });

    connection.on("error", (err) => {
      console.log(
        "Database Connection Error. Please make sure MongoDB is running.",
        err
      );
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong!");
    console.log(error);
  }
};
