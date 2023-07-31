import React from "react";
import { Button, Result } from "antd";
import { LayoutJustifyComponent } from "@/components/Layout";

const Component: React.FC = () => (
  <Result
    status="500"
    title="500"
    subTitle="Sorry, something went wrong."
    extra={<Button type="primary">Back Home</Button>}
  />
);

export default LayoutJustifyComponent(Component);
