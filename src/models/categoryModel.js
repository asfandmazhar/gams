import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Provide Category Name"],
    },
    slug: {
      type: String,
      required: [true, "Please Provide Category Slug"],
      unique: true,
    },
    icon: {
      type: String,
      required: [true, "Please Provide Category Icon"],
    },
  },
  { timestamps: true },
);

const Category =
  mongoose.models.category || mongoose.model("categories", categorySchema);

export default Category;
