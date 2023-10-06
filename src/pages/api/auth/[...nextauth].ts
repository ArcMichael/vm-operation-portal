import NextAuth, { NextAuthOptions } from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

const KeycloakConfig = {
  clientId: process.env.KEYCLOAK_ID,
  clientSecret: process.env.KEYCLOAK_SECRET,
  issuer: process.env.KEYCLOAK_ISSUER,
};

console.log(KeycloakConfig);

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [KeycloakProvider(KeycloakConfig)],
  theme: {
    colorScheme: "auto",
    brandColor: "", // Hex color code
    logo: "/logo_128x128.jpg", // Absolute URL to image
    buttonText: "", // Hex color code
  },
  pages: {
    signOut: "/auth/signout",
  },
  callbacks: {
    async jwt({ token }) {
      console.log("11", token);
      // token.userRole = "admin";
      return token;
    },
    async signIn(sign) {
      console.log("sign", sign);
      return true;
    },
    async redirect(redirect) {
      console.log("redirect", redirect);
      return "/smc";
    },
    async session(session) {
      console.log("session", session);
      return session.session;
    },
  },
};

export default NextAuth(authOptions);
