import { RouteConfig } from "@/configs";
import { Card } from "antd";
import Link from "next/link";
import React from "react";

const cardStyle: React.CSSProperties = {
  width: 240,
  margin: 20,
};

interface CardProps {
  title: string;
  href: string;
  description: string;
  pages: RouteConfig[];
}

const MolecularCard: React.FC<CardProps> = ({
  title,
  href,
  description,
  pages,
}) => {
  return (
    <Card bordered hoverable style={cardStyle}>
      <Link href={href}>
        <Card.Meta
          title={title}
          description={description}
          style={{ marginBottom: 20 }}
        />
      </Link>
      <CardLinkList pages={pages} />
    </Card>
  );
};

interface CardLinkListProps {
  pages: RouteConfig[];
}

const CardLinkList: React.FC<CardLinkListProps> = ({ pages }) => {
  return (
    <>
      {pages.map((item, index) => (
        <Link href={item.path || ""} key={index}>
          <p>{item.context}</p>
        </Link>
      ))}
    </>
  );
};

export default MolecularCard;
