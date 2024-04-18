import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { connectToDB } from "./app/lib/utils";
import { User } from "./app/lib/models/user";
import { NextAuthJWT } from "next-auth";
import { Session } from "next-auth";

interface TokenData {
  username?: string;
  id?: string;
  // Adicione outras propriedades do token aqui, se necessário
}

export interface UserSession extends Session {
  user: {
    username?: string;
    id?: string;
    // Adicione outras propriedades do usuário aqui, se necessário
  };
}

const login = async (credentials: Partial<Record<string, unknown>>) => {
  // console.log(credentials);
  try {
    connectToDB();
    const user = await User.findOne({ username: credentials.username });

    if (!user) throw new Error("Wrong credentials!");

    const isPasswordCorrect = user.password === credentials.password;

    if (!isPasswordCorrect) throw new Error("Wrong credentials!");

    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login!");
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: NextAuthJWT<UserSession>) {
      if (user) {
        token.username = user.username;
        token.id = user.id;
      }
      return token;
    },
    async session({
      session,
      token,
    }: NextAuthJWT<UserSession>): Promise<UserSession> {
      if (token) {
        session.user.username = token.username;
        session.user.id = token.id;
      }
      return session;
    },
  },
});
