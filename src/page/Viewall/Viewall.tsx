import { Layout } from "antd";

const { Content } = Layout;
import view from "../../components/Viewallnotifications/Viewallnotifications";
function View() {
  return (
    <Layout>
      <Content style={{ minHeight: "calc(100vh - 64px)" }}>
        <View />
      </Content>
    </Layout>
  );
}

export default View;
