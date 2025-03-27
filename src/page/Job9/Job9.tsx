import { Layout } from "antd";

import Job9 from "@/components/Job9/Job9";
const { Content } = Layout;

function Job2() {
  return (
    <Layout>
      <Content style={{ minHeight: "calc(100vh - 64px)" }}>
        <Job9 />
      </Content>
    </Layout>
  );
}

export default Job2;
