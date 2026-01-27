import { connectDB } from "@/config/dbConfig";
import User from "@/models/userModel";
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

    if (!userData?.isAdmin) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 },
      );
    }

    const { isAdmin, _id } = await request.json();

    const updatedUser = await User.findByIdAndUpdate(_id, { isAdmin });

    return NextResponse.json({
      success: true,
      message: `Role Change Successfully`,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}
