import { useEffect, useState } from "react";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";

//! component LifeCycle
//* 1-render
//* 2-componentDidMount => useEffect(()=>{},[])
//* 3-componentDidUpdate => useEffect(()=>{},[variable])

const Home = () => {
  const [tutorials, setTutorials] = useState([]);
  //* zincirleme then().catch() kullanımı
  // const getTutorials = () => {
  //   const URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";
  //   axios
  //     .get(URL)
  //     .then((res) => console.log(res.data))
  //     .catch((error) => console.log(error));
  // };
  console.log(tutorials);
  //* try/catch kullanımı
  const getTutorials = async () => {
    // const URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";
    try {
      const { data } = await axios.get(process.env.REACT_APP_URL);
      setTutorials(data);
    } catch (error) {
      console.log(error);
    }
  };

  //? componentDidMount (ilk render sonrasi bir kere istek gonder)
  useEffect(() => {
    getTutorials();
  }, []);

  return (
    <>
      <AddTutorial getTutorials={getTutorials} />
      <TutorialList tutorials={tutorials} getTutorials={getTutorials} />
    </>
  );
};

export default Home;
