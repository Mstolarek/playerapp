import styles from "../BasicLayout.module.css";
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import "antd/dist/antd.css";
import Signature from "../Components/Signature";
import CustomTitle from "../Components/Title";
import MediaSection from "../Components/MediaSection";
import { withAuthGate } from "../Contexts/AuthContext";

const HomeScene = () => {
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <CustomTitle value={"Home Scene"} />
      </Header>
      <Content className={styles.content}>
        <MediaSection sectionId={2} sectionTitle={"List 1"} />
        <MediaSection sectionId={4} sectionTitle={"List 2"} />
        <MediaSection sectionId={6} sectionTitle={"List 3"} />
      </Content>
      <Footer>
        <Signature />
      </Footer>
    </Layout>
  );
};

export default withAuthGate(HomeScene);
