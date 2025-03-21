import { Layout } from "antd";
import Basicsup from "../../components/Basicsup/Basicsup";
const { Content } = Layout;

function Dashboard() {
  return (
    <Layout>
      <Content style={{ minHeight: "calc(100vh - 64px)" }}>
        <Basicsup />
      </Content>
    </Layout>
  );
}

export default Dashboard;
