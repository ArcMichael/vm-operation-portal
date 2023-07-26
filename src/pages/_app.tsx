import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import "antd/dist/antd";
import "@/styles/globals.css";

import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import type { Session } from "next-auth";

import { useSession } from "next-auth/react";

export default function App({
  Component,
  pageProps,
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={pageProps.session}>
      <Auth />
      <ConfigProvider locale={zhCN}>
        <Component {...pageProps} />
      </ConfigProvider>
    </SessionProvider>
  );
}

const Auth = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  console.log(loading, session);
  return <div></div>;
};

// https://www.cnblogs.com/ttppl/articles/15730854.html
