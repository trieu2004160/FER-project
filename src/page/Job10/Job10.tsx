import { Layout } from "antd";

import Job10 from "@/components/Job10/Job10";
const { Content } = Layout;

function Job2() {
  return (
    <Layout>
      <Content style={{ minHeight: "calc(100vh - 64px)" }}>
        <Job10 />
      </Content>
    </Layout>
  );
}

export default Job2;
