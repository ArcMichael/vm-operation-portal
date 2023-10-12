import {
  BookOutlined,
  FileOutlined,
  LikeOutlined,
  TeamOutlined,
  UserOutlined,
  HomeOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { MenuConfig, RouteConfig } from "@/configs/menus/smc";
import Link from "next/link";
import React from "react";

// Define route configurations for gym
const gymRouteConfigs: RouteConfig[] = [
  {
    context: "BOOK",
    path: "/gym/book",
    defaultOpenKeys: [], // No need for open keys for top-level menu items
    defaultSelectedKeys: [],
  },
  {
    context: "MEMBER",
    path: "/gym/member",
    defaultOpenKeys: [], // No need for open keys for top-level menu items
    defaultSelectedKeys: [],
  },
  {
    context: "RESOURCE",
    path: "/gym/resource",
    defaultOpenKeys: [], // No need for open keys for top-level menu items
    defaultSelectedKeys: [],
  },
  {
    context: "ROOM",
    path: "/gym/room",
    defaultOpenKeys: [], // No need for open keys for top-level menu items
    defaultSelectedKeys: [],
  },
  {
    context: "TAGS",
    path: "/gym/tags",
    defaultOpenKeys: [], // No need for open keys for top-level menu items
    defaultSelectedKeys: [],
  },
  {
    context: "TEACHER",
    path: "/gym/teacher",
    defaultOpenKeys: [], // No need for open keys for top-level menu items
    defaultSelectedKeys: [],
  },
];

const gymConvertRouteToMenu = (
  route: RouteConfig,
  parentKey: string,
  onActionPortal?: any,
  setonActionPortal?: any
): MenuConfig => {
  const menuConfig: MenuConfig = {
    key: parentKey,
    icon: gymContextIconMap[route.context] || <AppstoreOutlined />, // Check gymContextIconMap too
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
      gymConvertRouteToMenu(
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
const gymContextIconMap: { [context: string]: React.ReactNode } = {
  BOOK: <BookOutlined />,
  MEMBER: <UserOutlined />,
  RESOURCE: <FileOutlined />,
  ROOM: <HomeOutlined />,
  TAGS: <LikeOutlined />,
  TEACHER: <TeamOutlined />,
};

// Convert route configs to menu configs
const gymMenuConfigs: MenuConfig[] = gymRouteConfigs.map((route, index) =>
  gymConvertRouteToMenu(route, `${index + 1}`)
);

export {
  gymRouteConfigs,
  gymMenuConfigs,
  gymContextIconMap,
  gymConvertRouteToMenu,
};
