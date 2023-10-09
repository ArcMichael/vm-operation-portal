import { ConfigMenuType } from "@/configs/";
import {
  UserOutlined,
  UserSwitchOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const configMenu: ConfigMenuType[] = [
  {
    key: "1",
    icon: <VideoCameraOutlined />,
    label: <Link href="/smc">SMC</Link>,
  },
  {
    key: "2",
    icon: <UserOutlined />,
    label: <Link href="/user">USER</Link>,
    children: [
      {
        key: "2.1",
        icon: <UserSwitchOutlined />,
        label: <Link href="/user/profile">PROFILE</Link>,
      },
    ],
  },
];

export { configMenu };
