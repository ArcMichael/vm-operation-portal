import React from "react";
import { GymReferences } from "@/configs/menus/gym";
import { RouteConfig } from "@/configs/menus/types";
import LayoutSmc from "@/components/Layout/layout-smc";
import MolecularCardSmc from "@/components/Molecular/Card/molecular-card-smc";

interface RefSubLinkType {
  title: string;
  description: string;
  href: string;
  defaultOpenKeys?: string[];
  defaultSelectedKeys?: string[];
}

const GymReferencePage: React.FC = () => {
  const refSubLinksToRouteConfig = (
    pages?: RefSubLinkType[]
  ): RouteConfig[] => {
    if (!pages) return [];
    return pages.map((page) => ({
      context: page.title,
      path: page.href,
      defaultOpenKeys: page.defaultOpenKeys || [],
      defaultSelectedKeys: page.defaultSelectedKeys || [],
    }));
  };

  const cardContainerStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  return (
    <div style={cardContainerStyle}>
      {GymReferences.map((refItem, idx) => {
        const { title, href, description, page } = refItem;
        return (
          <MolecularCardSmc
            key={idx}
            title={title}
            href={href}
            description={description}
            pages={refSubLinksToRouteConfig(page)}
          />
        );
      })}
    </div>
  );
};

export default LayoutSmc(GymReferencePage);
