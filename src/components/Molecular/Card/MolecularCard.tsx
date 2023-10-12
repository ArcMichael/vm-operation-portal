import { RouteConfig } from "@/configs";
import { Card } from "antd";
import Link from "next/link";
import React from "react";

const { Meta } = Card;

const cardStyle: React.CSSProperties = {
  width: 240,
  margin: 20,
};

interface MolecularCardProps {
  title: string;
  href: string;
  description: string;
  pages: RouteConfig[];
}

const MolecularCard: React.FC<MolecularCardProps> = ({
  title,
  href,
  description,
  pages,
}) => (
  <Card bordered hoverable style={cardStyle}>
    <Link href={href}>
      <Meta
        title={title}
        description={description}
        style={{ marginBottom: 20 }}
      />
    </Link>
    <MolecularCardList pages={pages} />
  </Card>
);

interface MolecularCardListProps {
  pages: RouteConfig[];
}

const MolecularCardList: React.FC<MolecularCardListProps> = ({ pages }) => (
  <>
    {pages.map((item, index) => (
      <Link href={item.path || ""} key={index}>
        <p>{item.context}</p>
      </Link>
    ))}
  </>
);

export default MolecularCard;
export { MolecularCardList };
