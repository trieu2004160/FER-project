import { Layout } from "antd";

import Job3 from "@/components/Job3/Job3";
const { Content } = Layout;

function job2() {
  return (
    <Layout>
      <Content style={{ minHeight: "calc(100vh - 64px)" }}>
        <Job3 />
      </Content>
    </Layout>
  );
}

export default job2;
