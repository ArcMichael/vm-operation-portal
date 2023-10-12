import { ItemType } from "antd/es/menu/hooks/useItems";
import type { RouteConfig, MenuConfig } from "./menus/smc";

type ConfigMenuType = ItemType & {
  title?: string;
  href?: string;
};

export type { ConfigMenuType, RouteConfig, MenuConfig };
