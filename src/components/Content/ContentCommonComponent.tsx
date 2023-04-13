import { Layout } from "antd";

interface IProps {
  children: React.ReactNode;
}

const ContentCommonComponent: React.FC<IProps> = ({ children }) => (
  <Layout.Content style={{ margin: "24px 16px 0", minHeight: "auto" }}>
    <div
      style={{
        padding: 24,
        background: "#fff",
        minHeight: 360,
        height: "100%",
      }}
    >
      {children || "Default Text"}
    </div>
  </Layout.Content>
);

export default ContentCommonComponent;
