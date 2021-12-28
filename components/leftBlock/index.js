import React from 'react'
import styles from './styles.module.css'
import Filters from '../../reusable-components/filters';

const LeftBlock = ({ data }) => {
    return (
        <div className={styles.left_block_filter}>
            {data && <Filters data={data} />}
        </div>
    )
}

export default LeftBlock
