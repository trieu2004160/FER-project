import { Layout } from "antd";

import Job6 from "@/components/Job6/Job6";
const { Content } = Layout;

function Job2() {
  return (
    <Layout>
      <Content style={{ minHeight: "calc(100vh - 64px)" }}>
        <Job6 />
      </Content>
    </Layout>
  );
}

export default Job6;
