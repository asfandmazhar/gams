import { connectDB } from "@/config/dbConfig";
import Category from "@/models/categoryModel";
import { NextResponse } from "next/server";
import { getUserFromToken } from "@/helpers/getUserFromToken";
import cloudinary from "@/config/cloudinary";

connectDB();

export async function POST(request) {
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
    const name = formData.get("name");
    const iconFile = formData.get("icon");
    const slug = name.toLowerCase().replace(/\s+/g, "-");

    if (!name || !iconFile) {
      return NextResponse.json(
        { success: false, message: "Name and Icon are required" },
        { status: 400 },
      );
    }

    if (name.length < 3) {
      return NextResponse.json(
        { success: false, message: "Invalid Category Name!" },
        { status: 400 },
      );
    }

    if (iconFile.type !== "image/svg+xml") {
      return NextResponse.json(
        { success: false, message: "Only SVG files are allowed" },
        { status: 400 },
      );
    }

    const uploadResult = await cloudinary.uploader.upload(iconFile.stream(), {
      folder: "categories",
      resource_type: "image",
      public_id: slug,
    });

    const newCategory = await Category.create({
      name,
      slug: slug,
      icon: uploadResult.secure_url,
    });

    return NextResponse.json({
      success: true,
      message: "Category created successfully",
      category: newCategory,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}
