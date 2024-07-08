import Axios from "axios";
import {Link} from "react-router-dom"
export default function CustomerListRow(props){
    const {_id,name,pno,dor,tor,cui,gue} =props.obj;


    const handleClick =()=>{
        Axios.delete("http://localhost:8000/customerRoute/delete-customer/" +_id)
        .then((res)=>{
            if(res.status === 200){
                alert("Record is deleted");
                window.location.reload();
            }  
            else
                Promise.reject();
        })
        .catch((err)=>{
            alert(err);
        })
    }


    return(
        <tr>
            <td>{name}</td>
            <td>{pno}</td>
            <td>{dor}</td>
            <td>{tor}</td>
            <td>{cui}</td>
            <td>{gue}</td>
            <td class="d-flex justify-content-center">
                <button class="btn btn-success">
                    <Link class="text-decoration-none text-light me-4" to={"/edit-customer/"+_id}><button class="btn btn-success">Edit</button></Link>
                </button>
                <button onClick={handleClick} class="btn btn-danger">Delete</button>
            </td>
        </tr>
    )
}
