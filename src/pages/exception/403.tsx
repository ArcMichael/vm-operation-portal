import React from "react";
import { Button, Result } from "antd";
import LayoutJustify from "@/components/Layout/layout-justify";

const Component: React.FC = () => (
  <Result
    status="403"
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={<Button type="primary">Back Home</Button>}
  />
);

export default LayoutJustify(Component);
