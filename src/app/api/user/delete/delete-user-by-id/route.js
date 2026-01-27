import { connectDB } from "@/config/dbConfig";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import { getUserFromToken } from "@/helpers/getUserFromToken";

connectDB();

export async function DELETE(request) {
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

    const { _id } = await request.json();

    if (userData?.id == _id) {
      return NextResponse.json(
        {
          success: false,
          message: "You cannot delete yourself when you are logIn",
        },
        { status: 401 },
      );
    }

    const DeletedUser = await User.findByIdAndDelete(_id);

    return NextResponse.json({
      success: true,
      message: `${DeletedUser?.username} is Deleted from Database!`,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}
