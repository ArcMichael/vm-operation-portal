import {
  AppstoreOutlined,
  UploadOutlined,
  LineChartOutlined,
  OrderedListOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import React from "react";
import { MenuConfig, RouteConfig } from "./types";

// Define route configurations for gym
const wordRouteConfigs: RouteConfig[] = [
  {
    context: "REPORT",
    path: "/word/report",
    defaultOpenKeys: ["1"], // No need for open keys for top-level menu items
    defaultSelectedKeys: [],
  },
  {
    context: "LIST",
    path: "/word/list",
    defaultOpenKeys: ["2"], // No need for open keys for top-level menu items
    defaultSelectedKeys: [],
  },
  {
    context: "SUBMIT",
    path: "/word/submit",
    defaultOpenKeys: ["3"], // No need for open keys for top-level menu items
    defaultSelectedKeys: [],
  },
];

interface RefSubLinkType {
  title: string;
  description: string;
  href: string;
}

// Gym References structure
const WordReferences: {
  title: string;
  description: string;
  href: string;
  page: RefSubLinkType[];
}[] = [
  {
    title: "WORD",
    description: "WORD",
    href: "/word",
    page: wordRouteConfigs.map((routeConfig) => ({
      title: routeConfig.context,
      description: routeConfig.context,
      href: routeConfig.path,
      defaultOpenKeys: routeConfig.defaultOpenKeys,
      defaultSelectedKeys: routeConfig.defaultSelectedKeys,
    })),
  },
];

const wordConvertRouteToMenu = (
  route: RouteConfig,
  parentKey: string,
  onActionPortal?: any,
  setonActionPortal?: any
): MenuConfig => {
  const menuConfig: MenuConfig = {
    key: parentKey,
    icon: wordContextIconMap[route.context] || (
      <AppstoreOutlined {...({} as any)} />
    ), // Check wordContextIconMap too
    label: route.action ? (
      <a onClick={() => route.action!()}>{route.context}</a>
    ) : (
      <Link
        onClick={() =>
          setonActionPortal({
            ...onActionPortal,
            onDefaultOpenKeys: route.defaultOpenKeys,
            onDefaultSelectedKeys: route.defaultSelectedKeys,
          })
        }
        href={route.path}
      >
        {route.context.toUpperCase()}
      </Link>
    ),
  };

  if (route.children) {
    menuConfig.children = route.children.map((child, index) =>
      wordConvertRouteToMenu(
        child,
        `${parentKey}.${index + 1}`,
        onActionPortal,
        setonActionPortal
      )
    );
  }

  return menuConfig;
};

// Mapping of gym contexts to their corresponding icons
const wordContextIconMap: Record<string, React.ReactNode> = {
  REPORT: <LineChartOutlined />,
  LIST: <OrderedListOutlined />,
  SUBMIT: <UploadOutlined />,
};

// Convert route configs to menu configs
const wordMenuConfigs: MenuConfig[] = wordRouteConfigs.map((route, index) =>
  wordConvertRouteToMenu(route, `${index + 1}`)
);

export {
  wordRouteConfigs,
  wordMenuConfigs,
  wordContextIconMap,
  wordConvertRouteToMenu,
  WordReferences,
};
