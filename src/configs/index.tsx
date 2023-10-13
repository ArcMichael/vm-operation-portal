import { ItemType } from "antd/es/menu/hooks/useItems";

type ConfigMenuType = ItemType & {
  title?: string;
  href?: string;
};

export type { ConfigMenuType };
