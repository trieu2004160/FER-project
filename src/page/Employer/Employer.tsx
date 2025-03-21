import { Layout } from "antd";
const { Content } = Layout;
import Employ from "../../components/Basicemploy/Employ";

function Employer() {
  return (
    <Layout>
      <Content style={{ minHeight: "calc(100vh - 64px)" }}>
        <Employ />
      </Content>
    </Layout>
  );
}

export default Employer;
