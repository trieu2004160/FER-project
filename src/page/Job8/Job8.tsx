import { Layout } from "antd";

import Job8 from "@/components/Job8/Job8";
const { Content } = Layout;

function Job2() {
  return (
    <Layout>
      <Content style={{ minHeight: "calc(100vh - 64px)" }}>
        <Job8 />
      </Content>
    </Layout>
  );
}

export default Job2;
