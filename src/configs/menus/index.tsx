import { ConfigMenuType } from "@/configs/";
import {
  AppstoreOutlined,
  UserOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import configGymMenu from "./gym";

const configMenu: ConfigMenuType[] = [
  {
    key: "1",
    icon: <AppstoreOutlined />,
    label: <Link href="/smc">SMC</Link>,
  },
  {
    key: "2",
    icon: <UserOutlined />,
    label: "USER",
    children: [
      {
        key: "2.1",
        icon: <UserSwitchOutlined />,
        label: <Link href="/user/profile">PROFILE</Link>,
      },
    ],
  },
];

export default configMenu;

export { configGymMenu };
