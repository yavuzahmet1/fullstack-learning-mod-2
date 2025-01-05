import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <Container>
            <Image src={logo} width={200} rounded /><br />
            <h1 className="title my-2 text-uppercase">Footbal Legends</h1>
        </Container>
    )
}

export default Header