import { connectDB } from "@/config/dbConfig";
import { NextResponse } from "next/server";
import Product from "@/models/productModel";

connectDB();

export async function GET(request, { params }) {
  try {
    const { slug } = await params;
    let products = [];
    if (slug.toLowerCase() == "all") {
      products = await Product.find();
    } else {
      const getProducts = await Product.find()
        .populate({
          path: "category",
          match: { slug: slug },
          select: "slug name",
        })
        .sort({ createdAt: -1 });

      products = products.filter((p) => p.category);
    }

    return NextResponse.json({
      success: true,
      products: products,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}
