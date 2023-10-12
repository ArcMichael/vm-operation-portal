import React from "react";

interface RouteConfig {
  context: string;
  path: string;
  action?: () => void; // Updated types
  defaultOpenKeys?: string[];
  defaultSelectedKeys?: string[];
  children?: RouteConfig[];
}

interface MenuConfig {
  key: string;
  icon: React.ReactNode;
  label: React.ReactNode;
  children?: MenuConfig[];
}

export type { RouteConfig, MenuConfig };
