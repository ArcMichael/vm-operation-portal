import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import "antd/dist/antd";
import "@/styles/globals.css";

import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import type { Session } from "next-auth";
import {
  AppSessionContext,
  AppSessionContextType,
  OnActionSmcType,
  useStateActionSmc,
} from "@/lib";

import { useMemo } from "react";

export default function App({
  Component,
  pageProps,
}: AppProps<{ session: Session }>) {
  const [onActionSmc, setonActionSmc] = useStateActionSmc();

  /**
   * 避免多次渲染
   */
  const value = useMemo(
    () => ({
      onActionSmc,
      setonActionSmc,
    }),
    [onActionSmc, setonActionSmc]
  );

  return (
    <ConfigProvider locale={zhCN}>
      <SessionProvider session={pageProps.session}>
        <AppSessionContext.Provider
          value={value as AppSessionContextType<OnActionSmcType<string[]>>}
        >
          <Component {...pageProps} />
        </AppSessionContext.Provider>
      </SessionProvider>
    </ConfigProvider>
  );
}

// https://www.cnblogs.com/ttppl/articles/15730854.html
