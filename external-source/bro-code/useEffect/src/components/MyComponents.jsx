import { useState, useEffect } from "react"

const MyComponents = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event Listener");

        return () => {

            window.removeEventListener("resize", handleResize);
            console.log("Event Listener removed");


        }
    }, [])



    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight)
    }

    return (
        <div>
            <p>Window With : {width}px</p>
            <p>Window Height : {height}px</p>
        </div>
    )
}

export default MyComponents