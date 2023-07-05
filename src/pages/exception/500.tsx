import React from "react";
import LayoutCommonComponent from "@/components/Layout/LayoutCommonComponent";
import { Button, Result } from "antd";

const Component: React.FC = () => (
  <Result
    status="500"
    title="500"
    subTitle="Sorry, something went wrong."
    extra={<Button type="primary">Back Home</Button>}
  />
);

export default LayoutCommonComponent(Component);
