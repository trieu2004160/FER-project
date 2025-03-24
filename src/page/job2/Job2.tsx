import { Layout } from "antd";

import Job2 from "@/components/Job2/Job2";
const { Content } = Layout;

function job2() {
  return (
    <Layout>
      <Content style={{ minHeight: "calc(100vh - 64px)" }}>
        <Job2 />
      </Content>
    </Layout>
  );
}

export default job2;
