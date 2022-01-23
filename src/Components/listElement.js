import styles from "./listElement.module.css";
import { Content } from "antd/lib/layout/layout";
import React from "react";
import { Image } from "antd";
import { Typography } from "antd";

const { Text } = Typography;
const ListElement = ({ obj }) => {
  return (
    <Content className={styles.content}>
      <Text className={styles.text}>{obj?.Title}</Text>

      <Image
        className={styles.image}
        src={obj?.Images?.[0]?.Url ?? "https://picsum.photos/200/300"}
        preview={false}
        width={320}
        height={180}
      ></Image>
    </Content>
  );
};

export default ListElement;
