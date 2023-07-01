import NextAuth, { NextAuthOptions } from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

import { getAnalyticsService } from "@/lib";

const options = {
  clientId: "portal",
  clientSecret: "Ye5hCXHMxCRENTPVZ6Bs2Rt8GKAzre7F",
  issuer: "https://sso.mly0110.org.cn:8443/auth/realms/GEN10/",
};
// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    /* EmailProvider({
         server: process.env.EMAIL_SERVER,
         from: process.env.EMAIL_FROM,
       }),
    // Temporarily removing the Apple provider from the demo site as the
    // callback URL for it needs updating due to Vercel changing domains

    Providers.Apple({
      clientId: process.env.APPLE_ID,
      clientSecret: {
        appleId: process.env.APPLE_ID,
        teamId: process.env.APPLE_TEAM_ID,
        privateKey: process.env.APPLE_PRIVATE_KEY,
        keyId: process.env.APPLE_KEY_ID,
      },
    }),
    */
    KeycloakProvider(options),
  ],
  theme: {
    colorScheme: "auto",
    brandColor: "", // Hex color code
    logo: "/logo_128x128.jpg", // Absolute URL to image
    buttonText: "", // Hex color code
  },
  callbacks: {
    async jwt({ token }) {
      console.log(token);
      token.userRole = "admin";
      return token;
    },
  },
};

export default NextAuth(authOptions);
