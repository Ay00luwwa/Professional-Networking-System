// auth.ts
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { z } from "zod";
import axios from "axios";
import { authAPI } from "./lib/api-service";

export const { handlers, auth, signIn, signOut } = NextAuth({
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.user.id = token.id as string;
      return session;
    },
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          const response = await authAPI.login({
            username: credentials.username,
            password: credentials.password
          });
          
          return {
            id: response.data.user.id.toString(),
            name: response.data.user.username,
            email: response.data.user.email,
            accessToken: response.data.token
          };
        } catch (error) {
          console.error("Login failed:", error);
          return null;
        }
      },
    }),
  ],
});