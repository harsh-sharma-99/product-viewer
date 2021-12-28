import React from 'react'
import styles from './styles.module.css'
import Filters from '../../reusable-components/filters';

const LeftBlock = ({ data }) => {
    // console.log(data, "left");
    return (
        <>
            {data && <Filters data={data} />}
        </>
    )
}

export default LeftBlock
