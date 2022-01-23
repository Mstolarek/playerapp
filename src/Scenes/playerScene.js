import styles from "../BasicLayout.module.css";
import Layout, { Content, Header } from "antd/lib/layout/layout";
import { routeNames } from "../Constants/routes";
import { useNavigate, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import useMediaPlayInfo from "../Hooks/useMediaPlayInfo";
import React, { useEffect } from "react";
import { Button, Col, Row, Spin } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import Text from "antd/lib/typography/Text";
import CustomTitle from "../Components/Title";
import { withAuthGate } from "../Contexts/AuthContext";
import useElementSize from "../Hooks/useElementSize";

const PlayerScene = () => {
  const [contentRef, { width, height }] = useElementSize();
  const navigate = useNavigate();
  const { getMediaInfo, isLoading, mediaInfo, errorMessage } =
    useMediaPlayInfo();

  const params = useParams();
  const Id = params?.trackId;

  useEffect(() => getMediaInfo(Id), []);

  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <LeftOutlined
          className={styles.backIcon}
          onClick={() => {
            navigate(`/${routeNames.home}`);
          }}
        />
        <CustomTitle value={mediaInfo?.Title} />
      </Header>
      {/* <Content> */}

      {isLoading ? (
        <Content className={styles.content}>
          <Spin />
        </Content>
      ) : errorMessage ? (
        <Content className={styles.content}>
          <Row justify="center">
            <Col xs={24}>
              <Text>{errorMessage}</Text>
            </Col>
            <Col xs={24}>
              <Button
                onClick={() => {
                  navigate(`/${routeNames.home}`);
                }}
              >
                Back
              </Button>
            </Col>
          </Row>
        </Content>
      ) : (
        <div
          ref={contentRef}
          style={{
            backgroundColor: "black",
            height: "100%",
            minHeight: "100%",
            flex: 1,
          }}
        >
          <ReactPlayer
            controls={true}
            playing={true}
            height={height}
            width={width}
            url={mediaInfo?.ContentUrl}
          />
        </div>
      )}

      {/* </Content> */}
    </Layout>
  );
};

export default withAuthGate(PlayerScene);
