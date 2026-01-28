import { connectDB } from "@/config/dbConfig";
import { getUserFromToken } from "@/helpers/getUserFromToken";
import { NextResponse } from "next/server";
import Category from "@/models/categoryModel";

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
        { success: false, message: "Forbidden" },
        { status: 403 },
      );
    }

    const categories = await Category.find().sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      categories,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}
