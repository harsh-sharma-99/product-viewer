import React from 'react'
import styles from './styles.module.css'
import DisplayCardBlock from './../displayCardBlock/index';

const Card = ({ companyInfo, companyName }) => {

    const displayCardDetails = () => {
        return (
            <>
                <div className={styles.container}>
                    {companyInfo.map(info => {
                        return <DisplayCardBlock product={info} />
                    })}
                </div>
            </>
        )

    }

    return (
        <>
            <div className={styles.product_name} >{companyName}</div>
            <hr className={styles.solid_top} />
            {companyInfo && displayCardDetails()}
        </>
    )
}

export default Card
