import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

const Home = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const response = await fetch('https://assessment-edvora.herokuapp.com').then((res) => {
      res.json().then((parsedJson) => {
        setData(parsedJson);
      })
    })
  }

  return (
    <>
      <div className={styles.heading}>Edvora</div>
      <hr className={styles.solid_top} />
      <hr className={styles.solid_bottom} />
    </>
  )
}

export default Home;
