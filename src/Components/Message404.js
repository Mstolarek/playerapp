import styles from "../BasicLayout.module.css";
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import React from "react";
import Signature from "./Signature";
import CustomTitle from "./Title";
import ReactPlayer from "react-player";
import { Row } from "antd";

const Message404 = () => {
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <CustomTitle value="404 not found" />
      </Header>
      <Content className={styles.content}>
        <Row align="center">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            playing
            volume={1}
          />
        </Row>
      </Content>
      <Footer>
        <Signature />
      </Footer>
    </Layout>
  );
};

export default Message404;
