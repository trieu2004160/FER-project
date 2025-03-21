import { Layout } from "antd";
import Basicgird from "../../components/Basicgird/Gird";

const { Content } = Layout;

function Home() {
  return (
    <Layout>
      <Content>
        <Basicgird />
      </Content>
    </Layout>
  );
}

export default Home;
