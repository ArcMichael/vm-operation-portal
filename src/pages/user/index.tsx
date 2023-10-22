import React from "react";
import LayoutSmc from "@/components/Layout/layout-smc";
import StatterBasic from "@/components/Molecular/Charts/statter-basic";

const UserChart: React.FC = () => {
  return <StatterBasic />;
};

export default LayoutSmc(UserChart);
