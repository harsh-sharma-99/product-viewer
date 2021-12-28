import React from "react";
import styles from "./styles.module.css";
import DisplayCardBlock from "./../displayCardBlock/index";

const Card = ({ companyInfo, companyName }) => {
  const displayCardDetails = () =>
    companyInfo.map((info) => <DisplayCardBlock product={info} />);

  return (
    <div className={styles.container}>
      <div className={styles.product_name}>{companyName}</div>
      <div className={styles.divider} />
      <div className={styles.card_container}>{displayCardDetails()}</div>
    </div>
  );
};

export default Card;
