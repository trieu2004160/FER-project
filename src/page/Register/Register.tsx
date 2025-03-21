import { Layout } from "antd";
import Register from "@/components/Register/Register";

const { Content } = Layout;

function registerpage() {
  return (
    <Layout>
      <Content>
        <Register />
      </Content>
    </Layout>
  );
}

export default registerpage;
