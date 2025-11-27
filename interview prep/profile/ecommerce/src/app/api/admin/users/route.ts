import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import UserModel from "@/models/user.model";
import connectDB from "@/lib/mongodb";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user || session.user.role !== "admin") {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    await connectDB();

    // Fetch all users except the current admin
    const users = await UserModel.find({ 
      email: { $ne: session.user.email } 
    })
    .select("name email role createdAt")
    .sort({ createdAt: -1 })
    .lean();

    // Format dates and IDs for JSON response
    const formattedUsers = users.map(user => ({
      ...user,
      _id: user._id.toString(),
      createdAt: user.createdAt.toISOString(),
    }));

    return NextResponse.json(formattedUsers);
  } catch (error) {
    console.error("[ADMIN_GET_USERS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
