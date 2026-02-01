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

    const { isActive, _id } = await request.json();

    if (!_id) {
      return NextResponse.json(
        { success: false, message: "Something is missing!" },
        { status: 400 },
      );
    }

    await Product.findByIdAndUpdate(_id, { isActive });

    return NextResponse.json({
      success: true,
      message: "Product updated successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}
