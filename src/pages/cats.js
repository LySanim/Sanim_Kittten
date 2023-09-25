import { Container } from "react-bootstrap";
import CatCard from "../components/CatCard";

const Cats =()=>{
    return(
        <div>
            <Container className="d-flex justify-content-center">
            <CatCard/>
            </Container>
        </div>
    );
}

export default Cats;