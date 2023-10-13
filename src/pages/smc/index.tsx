import React from "react";
import { LayoutSMCComponent } from "@/components/Layout";
import { GymReferences } from "@/configs/menus/gym";
import { MolecularCard } from "@/components/Molecular/Card";
import { RouteConfig } from "@/configs/menus/types";

interface RefSubLinkType {
  title: string;
  description: string;
  href: string;
}

const GymReferencePage: React.FC = () => {
  const refSubLinksToRouteConfig = (
    pages?: RefSubLinkType[]
  ): RouteConfig[] => {
    if (!pages) return [];
    return pages.map((page) => ({
      context: page.title,
      path: page.href,
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
          <MolecularCard
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

export default LayoutSMCComponent(GymReferencePage);
