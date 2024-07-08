import { useEffect, useState } from "react"
import CustomerListRow from "./CustomerListRow";
import Axios from "axios";


export default function CustomerList(){
   
    const [arr,setArr]=useState([]);


    useEffect(()=>{
        Axios.get("http://localhost:8000/customerRoute/")
        .then((res)=>{
            if(res.status === 200)
                setArr(res.data);
            else
                Promise.reject();
        })
        .catch((err)=>alert(err))
    },[])


    const ListItems =()=>{
        return arr.map((val,ind)=>{
            return <CustomerListRow obj={val} key={ind} />
        })
    }
    return(
        <table style={{maxWidth:"60%", margin:"50px auto"}} class="table table-bordered table-secondary table-striped">
            <thead>
                <tr>
                    <th class="text-center">Name</th>
                    <th class="text-center">Phone No.</th>
                    <th class="text-center">Date of Reg.</th>
                    <th class="text-center">Time of Reg.</th>
                    <th class="text-center">Cuisine</th>
                    <th class="text-center">No. of guests</th>
                    <th class="text-center">Action</th>
                </tr>
            </thead>
            <tbody>
                    {ListItems()}
            </tbody>
        </table>
    )
   
}
