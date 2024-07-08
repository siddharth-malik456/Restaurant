import { useState } from "react";
import CustomerForm from "./CustomerForm";
import Axios from "axios"


export default function CustomerList(){
    const[arr,setArr]=useState([])


    const getState =(childData)=>{
        setArr(childData);
    }


    const handleSubmit = (event)=>{
        	const data ={name:arr[0],pno:arr[1],dor:arr[2],tor:arr[3],cui:arr[4],gue:arr[5]};        
            Axios.post("http://localhost:8000/customerRoute/create-customer",data)
            .then((res)=>{
            if(res.status === 200)
                alert("new record added")
            else
                Promise.reject();
        })
        .catch((err)=>{
            alert(err);
        })
	   event.target.reset();
    }


    return(
        <form onSubmit={handleSubmit}>
            <CustomerForm getState={getState} 
                          nameValue=""
                          pnoValue=""
                          dorValue=""
                          torValue=""
                          cuiValue=""
                          gueValue="">Create Customer
                </CustomerForm>
        </form>
    )
}
