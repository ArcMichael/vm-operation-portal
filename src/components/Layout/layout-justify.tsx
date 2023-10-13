import { PureComponent } from "react";
import { Col, Row } from "antd";
import React from "react";

const LayoutJustify = (Comps: any) => {
  return class extends PureComponent {
    public static displayName = `LayoutJustify(${
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

export default LayoutJustify;
