import { Layout } from "antd";

import Job4 from "@/components/Job4/Job4";
const { Content } = Layout;

function job2() {
  return (
    <Layout>
      <Content style={{ minHeight: "calc(100vh - 64px)" }}>
        <Job4 />
      </Content>
    </Layout>
  );
}

export default job2;
