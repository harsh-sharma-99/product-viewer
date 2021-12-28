import React from "react";
import styles from "./styles.module.css";
import Card from "../../reusable-components/card";

const RightBlock = ({ data }) => {
  const displayList = () => {
    const uniqueCompanies = [
      ...new Set(data?.map((data) => data.product_name)),
    ];

    return uniqueCompanies.map((name) => {
      const companyInfo = data?.filter((info) => info.product_name === name);
      return (
        companyInfo && <Card companyInfo={companyInfo} companyName={name} />
      );
    });
  };
  return (
    <div className={styles.right_block_content}>
      <div className={styles.heading}>Edvora</div>
      <div className={styles.sub_head}>Products</div>
      {displayList()}
    </div>
  );
};

export default RightBlock;
