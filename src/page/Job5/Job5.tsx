import { Layout } from "antd";

import Job5 from "@/components/Job5/Job5";
const { Content } = Layout;

function Job2() {
  return (
    <Layout>
      <Content style={{ minHeight: "calc(100vh - 64px)" }}>
        <Job5 />
      </Content>
    </Layout>
  );
}

export default Job2;
