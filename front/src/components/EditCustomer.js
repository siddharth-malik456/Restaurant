import { useParams } from "react-router-dom";
import CustomerForm from "./CustomerForm";
import { useEffect,useState } from "react";
import Axios from "axios";


export default function EditCustomer(){
    const{id}=useParams();
    const [initialValue,setInitialValue] = useState({name:"",pno:"",dor:"",tor:"",cui:"",gue:""})
    const [newData,setNewData]=useState([]);

   
    useEffect(()=>{
        Axios.get("http://localhost:8000/customerRoute/update-customer/"+id)
        .then((res)=>{
            if(res.status === 200){
                const {name,pno,dor,tor,cui,gue}=res.data;
                setInitialValue({name,pno,dor,tor,cui,gue});
            } 
            else
                Promise.reject();
        })
        .catch((err)=>{
            alert(err);
        })
    },[id])


    const getState=(childData)=>{
        setNewData(childData);
    }

    const handleSubmit =()=>{
        const data={name:newData[0],pno:newData[1],dor:newData[2],tor:newData[3],cui:newData[4],gue:newData[5]}
        Axios.put("http://localhost:8000/customerRoute/update-customer/"+id,data)
        .then((res)=>{
            if(res.status === 200)
                alert("Record updated")
            else
                Promise.reject()
        })
        .catch((err)=> alert(err));
    }

   
    return(
        <form onSubmit={handleSubmit}>
            <CustomerForm getState={getState}
                          nameValue={initialValue.name}
                          pnoValue={initialValue.pno}
                          dorValue={initialValue.dor}
                          torValue={initialValue.tor}
                          cuiValue={initialValue.cui}
                          gueValue={initialValue.gue}>
                            Update Customer
                         </CustomerForm>
        </form>
    )
}
