export {};
import { ConfigMenuType } from "@/configs/";
import {
  BookOutlined,
  FileOutlined,
  LikeOutlined,
  TeamOutlined,
  UserOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import Link from "next/link";

// const menuGymPages:

const configGymMenu: ConfigMenuType[] = [
  {
    key: "1",
    icon: <BookOutlined />,
    label: <Link href="/gym/book">BOOK</Link>,
  },
  {
    key: "2",
    icon: <UserOutlined />,
    label: <Link href="/gym/member">MEMBER</Link>,
  },
  {
    key: "3",
    icon: <FileOutlined />,
    label: <Link href="/gym/resource">RESOURCE</Link>,
  },
  {
    key: "4",
    icon: <HomeOutlined />,
    label: <Link href="/gym/room">ROOM</Link>,
  },
  {
    key: "5",
    icon: <LikeOutlined />,
    label: <Link href="/gym/tags">TAGS</Link>,
  },
  {
    key: "6",
    icon: <TeamOutlined />,
    label: <Link href="/gym/teacher">TEACHER</Link>,
  },
];

export default configGymMenu;
