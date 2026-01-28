import { connectDB } from "@/config/dbConfig";
import { NextResponse } from "next/server";
import { getUserFromToken } from "@/helpers/getUserFromToken";
import Category from "@/models/categoryModel";
import cloudinary from "@/config/cloudinary";

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

    const formData = await request.formData();
    const iconFile = formData.get("icon");
    const id = formData.get("id");

    if (!id || !iconFile) {
      return NextResponse.json(
        { success: false, message: "Category ID or Icon missing" },
        { status: 400 },
      );
    }

    // ✅ File type validation
    if (!iconFile.type?.startsWith("image/")) {
      return NextResponse.json(
        { success: false, message: "Only image files are allowed" },
        { status: 400 },
      );
    }

    const category = await Category.findById(id);
    if (!category) {
      return NextResponse.json(
        { success: false, message: "Category not found" },
        { status: 404 },
      );
    }

    // Convert file to buffer
    const bytes = await iconFile.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload first (safe)
    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: "categories",
            resource_type: "image",
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          },
        )
        .end(buffer);
    });

    // Delete old icon only after successful upload
    if (category.iconPublicId) {
      await cloudinary.uploader.destroy(category.iconPublicId);
    }

    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      {
        icon: uploadResult.secure_url,
        iconPublicId: uploadResult.public_id,
      },
      { new: true },
    );

    return NextResponse.json({
      success: true,
      message: "Category icon updated successfully",
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
