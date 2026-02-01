import { connectDB } from "@/config/dbConfig";
import { getUserFromToken } from "@/helpers/getUserFromToken";
import Product from "@/models/productModel";
import { NextResponse } from "next/server";

connectDB();

export async function GET(request) {
  try {
    const userData = getUserFromToken(request);

    if (!userData) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 },
      );
    }

    if (!userData.isAdmin) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 },
      );
    }

    const totalProducts = await Product.countDocuments({});
    const totalActiveProducts = await Product.countDocuments({
      isActive: true,
    });
    const totalDeactivateProducts = await Product.countDocuments({
      isActive: false,
    });
    const totalPublishProducts = await Product.countDocuments({
      status: "published",
    });
    const totalDraftProducts = await Product.countDocuments({
      status: "draft",
    });

    return NextResponse.json({
      success: true,
      countProducts: {
        totalProducts,
        totalActiveProducts,
        totalDeactivateProducts,
        totalPublishProducts,
        totalDraftProducts,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}
