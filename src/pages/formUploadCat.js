import { Button, Form, InputGroup } from "react-bootstrap"
import page from "../pageStyle/page.css"
import UploadIcon from "../components/UploadIcon"
import { useState } from "react"
import uploadCatImage from "../services/fileService"



const Upload=()=>{
    // form state
    const  [catRequest,setCatRequest] = useState({});
    const [fileImage,setFileImage]=useState({})

    const onValueChangeHandler =(e)=>{
          const {breed_ids,value} = e.target;
          setCatRequest (prevState =>{
            return{
              prevState,
              [breed_ids]:value
            }
          })
          console.log(catRequest)
    }
  
  const onFileImageChangeHandler =(e)=>{
    setFileImage(e.target.files[0])
    console.log(e.target.files[0])
  
  }

  const onFormSubmitHandler = (e)=>{
    e.preventDefault()
    // upload file image
    let formData = new FormData()
    formData.append('file',fileImage)
    uploadCatImage(formData) 
    .then(json=>{
      console.log(json)
    })
  }

    return(
      <div className="m-3">

      <Form className="p-5 " onSubmit={onFormSubmitHandler} >
      <h3 className="mb-3 " style={{color:"#435334"}}>Upload Cat Image</h3>
      <InputGroup className="mb-3">
        <Form.Control  type="text" name="breed_ids"
          onChange={onValueChangeHandler}
          placeholder="Cat Name"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2" id="catName"/>
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control name="sub_id"
        onChange={onValueChangeHandler}
        as="textarea" 
        placeholder="Cat's description" 
        aria-label="With textarea" 
        id="catDes"/>
      </InputGroup>

      <InputGroup  className="uploadForm row d-flex  text-center   ">
         <div className="m-1">
           <UploadIcon/>
          </div>
         <div className="m-1">
         <Form.Control className="uploadFileImage"   type="file" id="uploadFileImage" onChange={onFileImageChangeHandler}/>
         </div>
         
      </InputGroup>
      
      <div className="text-center">
      <Button onSubmit={onFormSubmitHandler} type="submit" className="btnUpload my-4 justify-content-center  w-100"><h6>UPLOAD</h6></Button>
      </div>

      </Form>
      </div>
    )
}
export default Upload