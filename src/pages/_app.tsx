import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import "antd/dist/antd";
import "@/styles/globals.css";
import React from "react";

import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import type { Session } from "next-auth";

import { useMemo } from "react";

import {
  SessionContextPortal,
  useStateActionPortal,
  SessionContextService,
  useStateActionService,
} from "@/store/SessionContext";

import type {
  OnActionServiceType,
  SessionContextServiceType,
  OnActionPortalType,
  SessionContextPortalType,
} from "@/store/SessionContext";

export default function App({
  Component,
  pageProps,
}: AppProps<{ session: Session }>) {
  const [onActionPortal, setonActionPortal] = useStateActionPortal();
  const [onActionService, setonActionService] = useStateActionService();

  /**
   * 避免多次渲染
   */
  const SessionContextPortalValue = useMemo(
    () => ({
      onActionPortal,
      setonActionPortal,
    }),
    [onActionPortal, setonActionPortal]
  );

  const SessionContextServiceValue = useMemo(
    () => ({
      onActionService,
      setonActionService,
    }),
    [onActionService, setonActionService]
  );

  return (
    <ConfigProvider locale={zhCN}>
      <SessionProvider session={pageProps.session}>
        <SessionContextPortal.Provider
          value={
            SessionContextPortalValue as SessionContextPortalType<
              OnActionPortalType<string[]>
            >
          }
        >
          <SessionContextService.Provider
            value={
              SessionContextServiceValue as SessionContextServiceType<
                OnActionServiceType<string[]>
              >
            }
          >
            <Component {...pageProps} />
          </SessionContextService.Provider>
        </SessionContextPortal.Provider>
      </SessionProvider>
    </ConfigProvider>
  );
}

// https://www.cnblogs.com/ttppl/articles/15730854.html
// https://preview.pro.ant.design/
// https://github.com/ant-design/ant-design-pro
