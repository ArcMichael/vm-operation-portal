import { PureComponent } from "react";
import { Col, Layout, Row } from "antd";

const LayoutJustifyComponent = (_Component: any) =>
  class extends PureComponent {
    public static displayName = `LayoutJustifyComponent(${
      _Component.displayName || _Component.name || "Component"
    })`;

    public render() {
      return (
        <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
          <Col span={8}></Col>
          <Col span={8}>
            <_Component />
          </Col>
          <Col span={8}></Col>
        </Row>
      );
    }
  };

export default LayoutJustifyComponent;
