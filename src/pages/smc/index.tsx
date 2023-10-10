import React from "react";
import { Card } from "antd";
import Link from "next/link";
import { LayoutSMCComponent } from "@/components/Layout";
const { Meta } = Card;

interface RefType {
  title: string;
  description: string;
  href: string;
  page?: RefSubLinkType[];
}

interface RefSubLinkType {
  title: string;
  description: string;
  href: string;
}

const Component: React.FC = () => {
  let Ref = [
    {
      title: "GYM",
      description: "GYM",
      href: "/gym",
      page: [
        {
          title: "BOOK",
          description: "BOOK",
          href: "/gym/book",
        },
        {
          title: "MEMBER",
          description: "MEMBER",
          href: "/gym/member",
        },
        {
          title: "RESOURCE",
          description: "RESOURCE",
          href: "/gym/resource",
        },
        {
          title: "ROOM",
          description: "ROOM",
          href: "/gym/room",
        },
        {
          title: "TAGS",
          description: "TAGS",
          href: "/gym/tags",
        },
        {
          title: "TEACHER",
          description: "TEACHER",
          href: "/gym/teacher",
        },
      ],
    },
    {
      title: "TBD",
      description: "TBD",
      href: "",
      page: [
        {
          title: "TBD",
          description: "TBD",
          href: "",
        },
      ],
    },
    {
      title: "TBD",
      description: "TBD",
      href: "",
      page: [
        {
          title: "TBD",
          description: "TBD",
          href: "",
        },
      ],
    },
    {
      title: "TBD",
      description: "TBD",
      href: "",
    },
    {
      title: "TBD",
      description: "TBD",
      href: "",
      page: [
        {
          title: "TBD",
          description: "TBD",
          href: "",
        },
      ],
    },
    {
      title: "TBD",
      description: "TBD",
      href: "",
    },
  ];

  const cardStyle: React.CSSProperties = {
    width: 240,
    margin: 20,
  };

  const CardList = (Ref: RefType[]) => {
    return (
      <>
        {Ref.map((item, idx) => (
          <Card
            key={idx}
            // extra={<div></div>}
            // loading={false}
            bordered
            hoverable
            style={cardStyle}
            // cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Link href={item.href} key={idx}>
              <Meta
                title={item.title}
                description={item.description}
                style={{ marginBottom: 20 }}
              />
            </Link>

            {CardList_SLink(item)}
          </Card>
        ))}
      </>
    );
  };

  const CardList_SLink = (RefSubItems: RefType) => {
    if (!RefSubItems.page) return <div></div>;
    return (
      <>
        {RefSubItems?.page.map((item, idx) => (
          <Link href={item.href} key={idx}>
            <p>{item.description}</p>
          </Link>
        ))}
      </>
    );
  };

  return CardList(Ref);
};

export default LayoutSMCComponent(Component);
