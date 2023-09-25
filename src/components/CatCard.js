import { useEffect } from "react";
import {  Card, Col, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import fetchCat from "../services/actions/catAction";
import HeartButton from "./LoveIcon";
import Bin from "./Bin";
import EditIcon from "./EditIcon";

const CatCard =()=>{
  const dispatch =useDispatch();
  const {json} = useSelector(state => state.CAT_REDUCER)
  useEffect(()=>{
    console.log(json)
    dispatch(fetchCat())
    .then(()=>{
      console.log(`Cat has been fetched`)
    },[])
  })
return(
  <Row className="m-3" >
    {
      json&&json.map((cat)=>(
        <Col>
            <div className="row">
              <div className="col">
              <Card style={{ width: '18rem' }}>
              <Card.Img   src={cat.url} />
              <Card.Body>
                <Card.Title>
                  {cat.breed_ids}</Card.Title>
                <Card.Text>
                  {cat.sub_id}
                </Card.Text>
                <Row className="flex justify-content-between m-0">
                  <Col className="d-flex justify-content-start p-0">
                  <HeartButton/>
                  </Col>
                  <Col className="d-flex justify-content-end p-0">
                    <div>
                      <Bin/>  
                    </div>

                    <div className="mx-2">
                      <EditIcon/>
                    </div>

                  </Col>
                </Row>
              </Card.Body>
              </Card>
              </div>

            
            </div>
        </Col>
      ))
    }

  </Row>
    
)
}



export default CatCard;