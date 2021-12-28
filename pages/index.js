import { useEffect, useState } from 'react'
import Content from '../components/content';

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
    <Content data={data} />
  )
}

export default Home;
