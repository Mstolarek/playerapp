import styles from "./CustomList.module.css";
const CustomList = ({ title, renderItem, data }) => {
  return (
    <div>
      <h1>{title}</h1>
      <ul className={styles.list}>
        {data.map((item) => (
          <li className={styles.listElement} key={item.Id}>
            {renderItem(item)}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CustomList;
