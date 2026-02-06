import { connectDB } from "@/config/dbConfig";
import { NextResponse } from "next/server";
import Product from "@/models/productModel";

connectDB();

export async function GET(request, { params }) {
  try {
    const { slug } = await params;
    const product = await Product.find({
      "basic_info.slug": slug,
    });

    return NextResponse.json({
      success: true,
      product,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}
