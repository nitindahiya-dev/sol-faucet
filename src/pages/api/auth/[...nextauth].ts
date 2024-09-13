import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

if (!process.env.NEXT_PUBLIC_GITHUB_ID || !process.env.GITHUB_SECRET) {
  throw new Error("Missing NEXT_PUBLIC_GITHUB_ID or GITHUB_SECRET in your environment variables.");
}

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
