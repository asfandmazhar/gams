import { connectDB } from "@/config/dbConfig";
import { getUserFromToken } from "@/helpers/getUserFromToken";
import { NextResponse } from "next/server";
import Category from "@/models/categoryModel";
import cloudinary from "@/config/cloudinary";

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
    const category = await Category.findById(id);
    if (!category)
      return NextResponse.json(
        { success: false, message: "Category not found" },
        { status: 404 },
      );

    // Delete image from Cloudinary
    if (category.iconPublicId) {
      await cloudinary.uploader.destroy(category.iconPublicId);
    }

    // Delete category from DB
    await Category.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}
