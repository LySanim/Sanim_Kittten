// import { BASE_URL } from "../../constan/ts";
import { BASE_URL } from "../constants";
import { FETCH_CATS } from "./actionTypes";


const fetchCat =()=>{
    return(dispatch)=> {
        return fetch(`${BASE_URL}images/?limit=10&page=0&order=DESC&api_key=live_AsZ63LQ07ay0tKzMx667Ush1tygfi9fkupZdwt7p2tjURpMAPttFXCSs17AjwV2t`)
        .then(res => res.json())
        .then(json =>{
        console.log(json)   
        dispatch({
            type: FETCH_CATS,
            payload:json
        })

        return Promise.resolve() 
        } ) 
        .catch(error => console.log("error", error))
    }

}
export default fetchCat

