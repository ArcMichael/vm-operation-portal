import NextAuth, { NextAuthOptions } from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

const KeycloakConfig = {
  clientId: "portal",
  clientSecret: "OqCLEpNBdbBlbouNOxLlvHaD7RPc62Gl",
  issuer: "https://sso.mly0110.org.cn:8443/auth/realms/GEN10/",
};

// KEYCLOAK_ID=portal
// KEYCLOAK_SECRET=Ye5hCXHMxCRENTPVZ6Bs2Rt8GKAzre7F
// KEYCLOAK_ISSUER=https://sso.mly0110.org.cn:8443/auth/realms/

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
  callbacks: {
    async jwt({ token }) {
      console.log(token);
      token.userRole = "admin";
      return token;
    },
  },
};

export default NextAuth(authOptions);
