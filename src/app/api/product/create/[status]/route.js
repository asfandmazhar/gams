import { NextResponse } from "next/server";
import slugify from "slugify";
import { getUserFromToken } from "@/helpers/getUserFromToken";
import Product from "@/models/productModel";

export async function POST(request, { params }) {
  try {
    const user = getUserFromToken(request);

    if (!user || !user.isAdmin) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 403 },
      );
    }

    const body = await request.json();
    const { status } = params;

    const product = new Product({
      basic_info: {
        name: body.basic_info.name,
        slug: slugify(body.basic_info.name, { lower: true, strict: true }),
        thumbnail: body.basic_info.thumbnail,
        price: body.basic_info.price,
      },

      productPoints: body.productPoints,

      purchaseMonths: body.purchaseMonths,

      category: body.category,

      type: body.type, // already matches schema

      howItWork: body.howItWork.map((step) => ({
        title: step,
      })),

      faqs: body.faqs,

      accessAndDevices: body.accessAndDevices,

      productHighlight: body.productHighlight,

      productDetails: body.productDetails,

      details: body.details.map((item) => ({
        tagline: item.tagline,
        title: item.title,
        description: item.description,
        imageUrl: item.image?.url || "",
        imagePublicId: item.image?.publicId || "",
      })),

      SEO: body.SEO,

      status: status === "published" ? "published" : "draft",
    });

    const savedProduct = await product.save();

    return NextResponse.json({
      success: true,
      message: "Product saved successfully",
      data: savedProduct,
    });
  } catch (error) {
    console.error("Error saving product:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}
