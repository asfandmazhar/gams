import { connectDB } from "@/config/dbConfig";
import { getUserFromToken } from "@/helpers/getUserFromToken";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

connectDB();

export async function GET(request) {
  try {
    const userData = getUserFromToken(request);

    if (!userData || !userData.isAdmin) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const users = await User.find()
      .select("email -_id")
      .sort({ createdAt: -1 });

    const usersEmail = users.map((u) => u.email);

    return NextResponse.json({
      success: true,
      usersEmail,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
