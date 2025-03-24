import { Layout } from "antd";

import TransportationComponent from "../../components/Transportation/Transportation"; // Import the correct component
const { Content } = Layout;

function Transportation() {
  return (
    <Layout>
      <Content style={{ minHeight: "calc(100vh - 64px)" }}>
        <TransportationComponent />
      </Content>
    </Layout>
  );
}

export default Transportation;
