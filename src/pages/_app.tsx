import "@/styles/globals.css";
import type { AppProps } from "next/app";
import zhCN from "antd/locale/zh_CN";
import "antd/dist/antd";
import { ConfigProvider } from "antd";

import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <ConfigProvider locale={zhCN}>
        <Component {...pageProps} />
      </ConfigProvider>
    </SessionProvider>
  );
}
