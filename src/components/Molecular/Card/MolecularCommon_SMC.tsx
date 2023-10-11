import { ConfigMenuType } from "@/configs";
import { Card } from "antd";
import Link from "next/link";
import React from "react";

const { Meta } = Card;

const cardStyle: React.CSSProperties = {
  width: 240,
  margin: 20,
};

interface MolecularCardProps_SMC
  extends React.PropsWithChildren<{
    title: string;
    href: string;
    description: string;
    pages: ConfigMenuType[];
  }> {
  // ...
}

const MolecularCard_SMC: React.FC<MolecularCardProps_SMC> = ({
  title,
  href,
  description,
  pages,
}) => {
  return (
    <Card
      key={title}
      // extra={<div></div>}
      // loading={false}
      bordered
      hoverable
      style={cardStyle}
      // cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      <Link href={href} key={title}>
        <Meta
          title={title}
          description={description}
          style={{ marginBottom: 20 }}
        />
      </Link>
      <MolecularCardList_SMC pages={pages} />
    </Card>
  );
};
interface MolecularCardListProps_SMC
  extends React.PropsWithChildren<{
    pages: ConfigMenuType[];
  }> {
  // ...
}

const MolecularCardList_SMC: React.FC<MolecularCardListProps_SMC> = ({
  pages,
}) => {
  return (
    <>
      {pages.map((item, index) => (
        <Link href={item.href || ""} key={index}>
          <p>{item.title}</p>
        </Link>
      ))}
    </>
  );
};

export default MolecularCard_SMC;

export { MolecularCardList_SMC };
