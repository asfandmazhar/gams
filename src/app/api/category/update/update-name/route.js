import { connectDB } from "@/config/dbConfig";
import { NextResponse } from "next/server";
import { getUserFromToken } from "@/helpers/getUserFromToken";
import Category from "@/models/categoryModel";
import slugify from "slugify";

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

    if (!userData.isAdmin) {
      return NextResponse.json(
        { success: false, message: "Forbidden" },
        { status: 403 },
      );
    }

    const { name, _id } = await request.json();

    if (!_id || !name) {
      return NextResponse.json(
        { success: false, message: "Category ID or name missing" },
        { status: 400 },
      );
    }

    if (name.trim().length < 3) {
      return NextResponse.json(
        {
          success: false,
          message: "Category name must be at least 3 characters",
        },
        { status: 400 },
      );
    }

    const slug = slugify(name, {
      lower: true,
      strict: true,
      trim: true,
    });

    // 🔍 Optional: prevent duplicate category slug
    const existingCategory = await Category.findOne({
      slug,
      _id: { $ne: _id },
    });

    if (existingCategory) {
      return NextResponse.json(
        { success: false, message: "Category already exists" },
        { status: 409 },
      );
    }

    const updatedCategory = await Category.findByIdAndUpdate(
      _id,
      { name: name.trim(), slug },
      { new: true },
    );

    if (!updatedCategory) {
      return NextResponse.json(
        { success: false, message: "Category not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Category name updated successfully",
      category: updatedCategory,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 },
    );
  }
}
