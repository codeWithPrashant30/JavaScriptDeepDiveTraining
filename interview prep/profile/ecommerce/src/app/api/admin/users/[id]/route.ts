import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import UserModel from "@/models/user.model";
import connectDB from "@/lib/mongodb";

interface Params {
  params: {
    id: string;
  };
}

export async function PATCH(request: Request, { params }: Params) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user || session.user.role !== "admin") {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    const userId = params.id;
    const data = await request.json();
    const { role } = data;

    if (!role || !["user", "admin"].includes(role)) {
      return new NextResponse("Invalid role", { status: 400 });
    }

    await connectDB();

    // Check if trying to modify own role
    const targetUser = await UserModel.findById(userId).select("email").lean();
    if (targetUser?.email === session.user.email) {
      return new NextResponse("Cannot modify own role", { status: 400 });
    }

    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { role },
      { new: true }
    ).select("name email role").lean();

    if (!updatedUser) {
      return new NextResponse("User not found", { status: 404 });
    }

    return NextResponse.json({
      ...updatedUser,
      _id: updatedUser._id.toString()
    });
  } catch (error) {
    console.error("[ADMIN_UPDATE_USER]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: Params) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user || session.user.role !== "admin") {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    const userId = params.id;

    await connectDB();

    // Check if trying to delete own account
    const targetUser = await UserModel.findById(userId).select("email").lean();
    if (targetUser?.email === session.user.email) {
      return new NextResponse("Cannot delete own account", { status: 400 });
    }

    const deletedUser = await UserModel.findByIdAndDelete(userId);

    if (!deletedUser) {
      return new NextResponse("User not found", { status: 404 });
    }

    return NextResponse.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("[ADMIN_DELETE_USER]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
