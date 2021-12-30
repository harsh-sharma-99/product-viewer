import React from "react";
import styles from "./styles.module.css";
import DisplayCardBlock from "./../displayCardBlock/index";
import Arrow from "../../public/arrow.svg";

const Card = ({ companyInfo, companyName }) => {
  const displayCardDetails = () =>
    companyInfo.map((info, key) => (
      <DisplayCardBlock key={key} product={info} />
    ));
  return (
    <div className={styles.container}>
      <div className={styles.product_name}>{companyName}</div>
      <div className={styles.divider} />
      <div className={styles.card_wrapper}>
        <div className={styles.card_container}>{displayCardDetails()}</div>
        <div className={styles.arrow}>
          <Arrow />
        </div>
      </div>
    </div>
  );
};

export default Card;
