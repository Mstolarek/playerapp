import styles from "../BasicLayout.module.css";
import { routeNames } from "../Constants/routes";
import { useNavigate } from "react-router-dom";
import { Button, Input, Form } from "antd";
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import { useCallback } from "react";
import Signature from "../Components/Signature";

import { useAuthContext } from "../Contexts/AuthContext";
import CustomTitle from "../Components/Title";

const SplashScene = () => {
  const navigate = useNavigate();
  const { logInUser } = useAuthContext();

  const handleRegLogIn = useCallback(
    async (login, password) => {
      await logInUser(login, password);
      navigate(`/${routeNames.home}`);
    },
    [navigate, logInUser]
  );

  const handeGuestLogIn = useCallback(async () => {
    await logInUser();
    navigate(`/${routeNames.home}`);
  }, [navigate, logInUser]);

  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <CustomTitle value={"Splash Scene"} />
      </Header>

      <Content className={styles.content}>
        <Form
          name="login"
          onFinish={(values) => {
            handleRegLogIn(values.username, values.password);
          }}
        >
          <Form.Item name="username">
            <Input placeholder="Username" size="large"></Input>
          </Form.Item>
          <Form.Item name="password">
            <Input.Password
              placeholder="Password"
              type="password"
              size="large"
            ></Input.Password>
          </Form.Item>
          <Button type="default" htmlType="Submit">
            Log in
          </Button>
          <Button onClick={handeGuestLogIn} type="default">
            Log in as Guest
          </Button>
        </Form>
      </Content>

      <Footer>
        <Signature />
      </Footer>
    </Layout>
  );
};

export default SplashScene;
