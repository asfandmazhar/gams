import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please Provide Your Full Name"],
    },
    username: {
      type: String,
      required: [true, "Please Provide Username"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please Provide Email Address"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please Provide Password"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
  },
  { timestamps: true },
);

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
