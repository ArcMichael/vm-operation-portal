import React from "react";
import { LayoutJustifyComponent } from "@/components/Layout";
import { Button, Result } from "antd";

const Component: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary">Back Home</Button>}
  />
);

export default LayoutJustifyComponent(Component);
