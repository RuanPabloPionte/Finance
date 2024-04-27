import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id?: string;
      username: string;
      /** The user's postal address. */
      address: string;
    } & DefaultSession["user"];
  }

  interface User {
    username: string;
    id: string;
    sub: string;
  }
}

import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    username: string;
    id?: string;
    /** OpenID ID Token */
    idToken?: string;
  }
}
