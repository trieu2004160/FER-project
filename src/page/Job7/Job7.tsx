import { Layout } from "antd";

import Job7 from "@/components/Job7/Job7";
const { Content } = Layout;

function Job2() {
  return (
    <Layout>
      <Content style={{ minHeight: "calc(100vh - 64px)" }}>
        <Job7 />
      </Content>
    </Layout>
  );
}

export default Job2;
