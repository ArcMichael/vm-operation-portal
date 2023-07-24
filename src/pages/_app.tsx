import "@/styles/globals.css";
import zhCN from "antd/locale/zh_CN";
import "antd/dist/antd";
import { ConfigProvider } from "antd";

import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";

import type { AppProps } from "next/app";

export default function App({
  Component,
  pageProps,
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={pageProps.session}>
      <ConfigProvider locale={zhCN}>
        <Component {...pageProps} />
      </ConfigProvider>
    </SessionProvider>
  );
}
