import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    basic_info: {
      name: { type: String, required: true, trim: true },
      slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
      },
      thumbnail: {
        url: { type: String },
        publicId: { type: String },
        alt: { type: String },
      },
      price: {
        originalPrice: { type: Number },
        discountedPrice: { type: Number, default: 0 },
      },
    },

    productPoints: [{ type: String, trim: true }],

    purchaseMonths: {
      oneMonth: { type: Boolean, default: false },
      threeMonth: { type: Boolean, default: false },
      sixMonth: { type: Boolean, default: false },
      twelveMonth: { type: Boolean, default: false },
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    type: [{ title: { type: String, trim: true } }],

    howItWork: [{ title: { type: String, trim: true } }],

    faqs: [
      {
        title: { type: String, trim: true },
        description: { type: String, trim: true },
      },
    ],

    accessAndDevices: [
      {
        feature: { type: String, trim: true },
        description: { type: String, trim: true },
      },
    ],

    productHighlight: {
      name: { type: String, trim: true },
      subtitle: { type: String, trim: true },
      tagline: { type: String, trim: true },
    },

    productDetails: {
      tagline: { type: String, trim: true },
      subtitle: { type: String, trim: true },
      image: {
        url: { type: String },
        publicId: { type: String },
        alt: { type: String },
      },
    },

    details: [
      {
        tagline: { type: String, trim: true },
        title: { type: String, trim: true },
        description: { type: String, trim: true },
        imageUrl: { type: String },
        imagePublicId: { type: String },
      },
    ],

    SEO: {
      title: { type: String, trim: true },
      description: { type: String, trim: true },
      tags: { type: String, trim: true },
    },

    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },

    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
