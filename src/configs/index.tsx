import { ItemType } from "antd/es/menu/hooks/useItems";
import configMenu, { configGymMenu } from "./menus";

type ConfigMenuType = ItemType & {
  title?: string;
  href?: string;
};

export type { ConfigMenuType };

export { configMenu, configGymMenu };
