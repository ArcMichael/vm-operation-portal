import StackedColumn from "@/components/Molecular/Charts/stack/stack-column";
import LayoutWord from "@/components/Layout/layout-word";
import React from "react";
import columnData from "./column-data";

const Component: React.FC = () => (
  <StackedColumn stackedColumnData={columnData} />
);

export default LayoutWord(Component);
