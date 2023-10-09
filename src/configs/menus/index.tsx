import { ConfigMenuType } from "@/configs/";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
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
    label: <Link href="/user/profile">USER</Link>,
  },
];

export { configMenu };
