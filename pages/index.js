import { useEffect, useState } from 'react'
import LeftBlock from '../components/leftBlock'
import RightBlock from '../components/rightBlock'

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
      <LeftBlock data={data} />
      <RightBlock data={data} />
    </>
  )
}

export default Home;
