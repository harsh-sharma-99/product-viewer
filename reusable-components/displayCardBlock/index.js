import styles from "./styles.module.css";

const DisplayCardBlock = ({ product }) => {
  const { image, product_name, brand_name, price, discription, date, address } =
    product ?? {};
  const formattedDate = new Date(date).toISOString().substring(0, 10);
  return (
    <div className={styles.box}>
      <div className={styles.image_container}>
        <img className={styles.image_core} src={image} />
        <div className={styles.image_container_details}>
          <div className={styles.product_name}>{product_name}</div>
          <div className={styles.brand_name}>{brand_name}</div>
          <div className={styles.price}>$ {price}</div>
        </div>
      </div>
      <div className={styles.location_container}>
        <div className={styles.location}>{address.city}</div>
        <div className={styles.date}>Date: {formattedDate}</div>
      </div>
      <div className={styles.description}>{discription}</div>
    </div>
  );
};

export default DisplayCardBlock;
