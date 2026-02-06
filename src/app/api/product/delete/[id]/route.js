import { connectDB } from "@/config/dbConfig";
import { getUserFromToken } from "@/helpers/getUserFromToken";
import { NextResponse } from "next/server";
import Product from "@/models/productModel";

connectDB();

export async function DELETE(request, { params }) {
  try {
    const userData = getUserFromToken(request);

    if (!userData)
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 },
      );

    if (!userData.isAdmin)
      return NextResponse.json(
        { success: false, message: "Forbidden" },
        { status: 403 },
      );

    const { id } = await params;
    const product = await Product.findById(id);
    if (!product)
      return NextResponse.json(
        { success: false, message: "Product not found" },
        { status: 404 },
      );

    await Product.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "Product Deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}
