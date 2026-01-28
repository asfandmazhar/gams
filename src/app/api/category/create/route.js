import { connectDB } from "@/config/dbConfig";
import Category from "@/models/categoryModel";
import { NextResponse } from "next/server";
import { getUserFromToken } from "@/helpers/getUserFromToken";
import cloudinary from "@/config/cloudinary";
import slugify from "slugify";

connectDB();

export async function POST(request) {
  try {
    const userData = getUserFromToken(request);

    if (!userData || !userData.isAdmin) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 403 },
      );
    }

    const formData = await request.formData();
    const name = formData.get("name");
    const iconFile = formData.get("icon");

    if (!name || !iconFile) {
      return NextResponse.json(
        { success: false, message: "Name or icon is missing" },
        { status: 400 },
      );
    }

    const bytes = await iconFile.arrayBuffer();
    const buffer = Buffer.from(bytes);

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

    const slug = slugify(name, { lower: true, strict: true });

    const newCategory = new Category({
      name,
      slug,
      icon: uploadResult.secure_url,
      iconPublicId: uploadResult.public_id,
    });

    await newCategory.save();

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
