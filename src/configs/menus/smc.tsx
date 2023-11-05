import React from "react";
import {
  AppstoreOutlined,
  UserOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { MenuProps } from "antd";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { MenuConfig, RouteConfig } from "./types";

const routeConfigs: RouteConfig[] = [
  {
    context: "smc",
    path: "/smc",
    defaultOpenKeys: ["1"], // No need for open keys for top-level menu items
    defaultSelectedKeys: [],
  },
  {
    context: "user",
    path: "/user",
    defaultOpenKeys: ["2"],
    defaultSelectedKeys: [], // This top-level menu item is not selected by default
    children: [
      {
        context: "profile",
        path: "/user/profile",
        defaultOpenKeys: ["2.1", "2"], // This is a child menu item, so no need for open keys
        defaultSelectedKeys: [],
      },
    ],
  },
  {
    context: "Sign Out",
    action: () => signOut(),
    path: "",
    defaultOpenKeys: [],
    defaultSelectedKeys: [],
  },
];

const contextIconMap: { [context: string]: React.ReactNode } = {
  smc: <AppstoreOutlined {...({} as any)} />,
  user: <UserOutlined {...({} as any)} />,
  profile: <UserSwitchOutlined {...({} as any)} />,
};

const generateHeaderConfig = (
  onActionPortal: any,
  setonActionPortal: any
): MenuProps["items"] => {
  return routeConfigs.map((route, index) =>
    smcConvertRouteToMenu(
      route,
      `${index + 1}`,
      onActionPortal,
      setonActionPortal
    )
  );
};

const smcConvertRouteToMenu = (
  route: RouteConfig,
  parentKey: string,
  onActionPortal?: any,
  setonActionPortal?: any
): MenuConfig => {
  const menuConfig: MenuConfig = {
    key: parentKey,
    icon: contextIconMap[route.context] || (
      <AppstoreOutlined {...({} as any)} />
    ), // Check gymContextIconMap too
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
      smcConvertRouteToMenu(
        child,
        `${parentKey}.${index + 1}`,
        onActionPortal,
        setonActionPortal
      )
    );
  }

  return menuConfig;
};

const menuConfigs: MenuConfig[] = routeConfigs.map((route, index) =>
  smcConvertRouteToMenu(route, `${index + 1}`)
);

export type { RouteConfig, MenuConfig };
export {
  routeConfigs,
  menuConfigs,
  generateHeaderConfig,
  contextIconMap,
  smcConvertRouteToMenu,
};
