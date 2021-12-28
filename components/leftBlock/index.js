import React from 'react'
import styles from './styles.module.css'
import Filters from '../../reusable-components/filters';

const LeftBlock = ({ data }) => {
    return (
        <>
            {data && <Filters data={data} />}
        </>
    )
}

export default LeftBlock
