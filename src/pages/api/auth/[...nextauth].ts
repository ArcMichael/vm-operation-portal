import NextAuth, { NextAuthOptions, Profile } from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

const KeycloakConfig = {
  clientId: process.env.KEYCLOAK_ID,
  clientSecret: process.env.KEYCLOAK_SECRET,
  issuer: process.env.KEYCLOAK_ISSUER,
};

interface CustomProfile extends Profile {
  accessToken?: string;
}

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
    async jwt({ token, account, profile }) {
      // console.log("profile--", profile);
      // token.userRole = "admin";
      if (account && profile) {
        token.accessToken = (profile as CustomProfile).accessToken;
      }
      return token;
    },
    async signIn({ profile }) {
      console.log(profile);
      return true;
    },
    async redirect(redirect) {
      console.log("redirect", redirect);
      return "/smc";
    },
    async session({ session, token }) {
      // 这里检查 token 对象中是否有 accessToken
      if (token.accessToken) {
        // 然后将它添加到 session 对象中
        (session as any).accessToken = token.accessToken;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
