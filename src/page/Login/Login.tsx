import { Layout } from "antd";
import Login from "@/components/Login/Login";

const { Content } = Layout;

function Loginpage() {
  return (
    <Layout>
      <Content>
        <Login />
      </Content>
    </Layout>
  );
}

export default Loginpage;
