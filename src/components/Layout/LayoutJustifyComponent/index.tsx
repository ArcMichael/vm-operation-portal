import { PureComponent } from "react";
import { Col, Row } from "antd";

const LayoutJustifyComponent = (Comps: any) => {
  return class extends PureComponent {
    public static displayName = `LayoutJustifyComponent(${
      Comps.displayName || Comps.name || "Component"
    })`;

    public render() {
      return (
        <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
          <Col span={8}></Col>
          <Col span={8}>
            <Comps />
          </Col>
          <Col span={8}></Col>
        </Row>
      );
    }
  };
};

export default LayoutJustifyComponent;
