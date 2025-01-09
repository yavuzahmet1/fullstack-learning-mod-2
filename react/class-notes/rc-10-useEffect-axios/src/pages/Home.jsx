import { useEffect, useState } from "react";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios"

const URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

const Home = () => {
    //!Component LifeCircle
    //*1-render
    //*2-ComponentDidMount=>useEffect([])
    //*3-componentDidUpdate => useEffect(()=>{},[variable])

    const [tutorials, setTutorial] = useState([])

    //* zincirleme then().catch() kullanımı
    // const getTutorials = () => {
    //   const URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";
    //   axios
    //     .get(URL)
    //     .then((res) => console.log(res.data))
    //     .catch((error) => console.log(error));
    // };

    const getTutorials = async () => {

        try {
            const { data } = await axios.get(URL);
            setTutorial(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getTutorials();
    }, [])

    return (
        <>
            <AddTutorial getTutorials={getTutorials} />
            <TutorialList tutorials={tutorials} getTutorials={getTutorials} />
        </>
    );
};

export default Home;