import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please provide your full name"],
    },
    username: {
      type: String,
      required: [true, "Please provide username"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please provide email address"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Please provide password"],
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

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
