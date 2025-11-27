import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    role?: "user" | "admin";
  }

  interface Session {
    user: User & {
      id: string;
      role?: "user" | "admin";
    };
  }
}
