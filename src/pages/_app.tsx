import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import "antd/dist/antd";
import "@/styles/globals.css";

import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import type { Session } from "next-auth";

export default function App({
  Component,
  pageProps,
}: AppProps<{ session: Session }>) {
  return (
    <ConfigProvider locale={zhCN}>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ConfigProvider>
  );
}

// https://www.cnblogs.com/ttppl/articles/15730854.html
