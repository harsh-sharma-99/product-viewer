import React from 'react'
import LeftBlock from '../leftBlock'
import RightBlock from '../rightBlock'
import styles from './styles.module.css'

const Content = ({ data }) => {
    return (
        <div className={styles.root_container}>
            <LeftBlock data={data} />
            <RightBlock data={data} />
        </div>
    )
}

export default Content
