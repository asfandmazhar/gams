import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide category name"],
    },
    slug: {
      type: String,
      required: [true, "Please provide category slug"],
      unique: true,
    },
    icon: {
      type: String,
      required: [true, "Please provide category icon"],
    },
    iconPublicId: {
      type: String,
      required: [true, "Please provide Cloudinary public_id"],
    },
  },
  { timestamps: true },
);

const Category =
  mongoose.models.Category || mongoose.model("Category", categorySchema);

export default Category;
