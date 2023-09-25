import { Container } from "react-bootstrap";
import CatCard from "../components/CatCard";

const Cats =()=>{
    return(
        <div>
            <h1>Display all card</h1>
            <Container className="d-flex justify-content-center">
            <CatCard/>
            </Container>
        </div>
    );
}

export default Cats;
