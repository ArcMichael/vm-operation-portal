import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import "antd/dist/antd";
import "@/styles/globals.css";

import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import type { Session } from "next-auth";
import { AppSessionContext } from "@/lib";
import { AppSessionContextType, useOnCollapse } from "@/lib/AppSessionContext";

export default function App({
  Component,
  pageProps,
}: AppProps<{ session: Session }>) {
  const [onCollapse, setOnCollapse] = useOnCollapse();

  return (
    <ConfigProvider locale={zhCN}>
      <SessionProvider session={pageProps.session}>
        <AppSessionContext.Provider
          value={
            {
              onCollapse,
              setOnCollapse,
            } as AppSessionContextType
          }
        >
          <Component {...pageProps} />
        </AppSessionContext.Provider>
      </SessionProvider>
    </ConfigProvider>
  );
}

// https://www.cnblogs.com/ttppl/articles/15730854.html
