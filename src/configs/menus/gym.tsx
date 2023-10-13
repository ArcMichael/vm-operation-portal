import {
  BookOutlined,
  FileOutlined,
  LikeOutlined,
  TeamOutlined,
  UserOutlined,
  HomeOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import React from "react";
import { MenuConfig, RouteConfig } from "./types";

// Define route configurations for gym
const gymRouteConfigs: RouteConfig[] = [
  {
    context: "BOOK",
    path: "/gym/book",
    defaultOpenKeys: ["1"], // No need for open keys for top-level menu items
    defaultSelectedKeys: [],
  },
  {
    context: "MEMBER",
    path: "/gym/member",
    defaultOpenKeys: ["2"], // No need for open keys for top-level menu items
    defaultSelectedKeys: [],
  },
  {
    context: "RESOURCE",
    path: "/gym/resource",
    defaultOpenKeys: ["3"], // No need for open keys for top-level menu items
    defaultSelectedKeys: [],
  },
  {
    context: "ROOM",
    path: "/gym/room",
    defaultOpenKeys: ["4"], // No need for open keys for top-level menu items
    defaultSelectedKeys: [],
  },
  {
    context: "TAGS",
    path: "/gym/tags",
    defaultOpenKeys: ["5"], // No need for open keys for top-level menu items
    defaultSelectedKeys: [],
  },
  {
    context: "TEACHER",
    path: "/gym/teacher",
    defaultOpenKeys: ["6"], // No need for open keys for top-level menu items
    defaultSelectedKeys: [],
  },
];

interface RefSubLinkType {
  title: string;
  description: string;
  href: string;
}

// Gym References structure
const GymReferences: {
  title: string;
  description: string;
  href: string;
  page: RefSubLinkType[];
}[] = [
  {
    title: "GYM",
    description: "GYM",
    href: "/gym",
    page: gymRouteConfigs.map((routeConfig) => ({
      title: routeConfig.context,
      description: routeConfig.context,
      href: routeConfig.path,
    })),
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
const gymContextIconMap: Record<string, React.ReactNode> = {
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
  GymReferences,
};
