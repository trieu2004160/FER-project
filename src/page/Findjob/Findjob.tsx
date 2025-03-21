import { Layout } from "antd";
const { Content } = Layout;
import Basicfind from "../../components/Basicfind/Basicfine";

function FindJob() {
  return (
    <Layout>
      <Content style={{ minHeight: "calc(100vh - 64px)" }}>
        <Basicfind />
      </Content>
    </Layout>
  );
}

export default FindJob;
