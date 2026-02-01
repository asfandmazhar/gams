import { connectDB } from "@/config/dbConfig";
import { NextResponse } from "next/server";
import Category from "@/models/categoryModel";

connectDB();

export async function GET(request) {
  try {
    const categories = await Category.find().select("name slug icon");

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
