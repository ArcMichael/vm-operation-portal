import "@/styles/globals.css";
import type { AppProps } from "next/app";
import zhCN from "antd/locale/zh_CN";
import "antd/dist/antd";
import { ConfigProvider } from "antd";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider locale={zhCN}>
      <Component {...pageProps} />
    </ConfigProvider>
  );
}
