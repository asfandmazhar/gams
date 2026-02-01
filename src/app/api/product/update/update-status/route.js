import { connectDB } from "@/config/dbConfig";
import Product from "@/models/productModel";
import { NextResponse } from "next/server";
import { getUserFromToken } from "@/helpers/getUserFromToken";

connectDB();

export async function PUT(request) {
  try {
    const userData = getUserFromToken(request);

    if (!userData) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 },
      );
    }

    const { status, _id } = await request.json();

    if (!status || !_id) {
      return NextResponse.json(
        { success: false, message: "Something is missing!" },
        { status: 400 },
      );
    }

    await Product.findByIdAndUpdate(_id, { status });

    return NextResponse.json({
      success: true,
      message: "Product Status updated successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}
