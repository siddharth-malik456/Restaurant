import { useEffect,useState } from "react"


export default function CustomerForm(props){
    const[name,setName] =useState(props.nameValue)
    const[pno,setPno] =useState(props.pnoValue)
    const[dor,setDor] =useState(props.dorValue)
    const[tor,setTor] =useState(props.torValue)
    const[cui,setCui] =useState(props.cuiValue)
    const[gue,setGue] =useState(props.gueValue)

    useEffect(()=>{
        setName(props.nameValue)
        setPno(props.pnoValue)
        setDor(props.dorValue)
        setTor(props.torValue)
        setCui(props.cuiValue)
        setGue(props.gueValue)
    },[props.nameValue,props.pnoValue,props.dorValue,props.torValue,props.cuiValue,props.gueValue])


    const arr=[name,pno,dor,tor,cui,gue];


    const handleClick =()=>{
        props.getState(arr);
    }


    return(
        <div style={{maxWidth:"40%", margin:"0px auto"}}>
            <input onChange={(event)=>setName(event.target.value)} class="form-control" placeholder="Enter Name" />
            <input onChange={(event)=>setPno(event.target.value)} class="form-control" placeholder="Enter Phone No" />
            <input onChange={(event)=>setDor(event.target.value)} class="form-control" placeholder="Enter Date of Registration" />
            <input onChange={(event)=>setTor(event.target.value)} class="form-control" placeholder="Enter Time of Registration" />
            <select name="cuisine" onChange={(event)=>setCui(event.target.value)} class="form-control" placeholder="Enter Cuisine type">
                <option value="Select Cuisine" selected>Select Cuisine</option>
                <option value="Asian">Asian</option>
                <option value="Italian">Italian</option>
                <option value="Korean">Korean</option>
                <option value="Japanese">Japanese</option>
                <option value="Mexican">Mexican</option>
                <option value="French">French</option>
                </select>
            <input onChange={(event)=>setGue(event.target.value)} class="form-control" placeholder="Enter No. of guests" />
            <button onClick={handleClick} type="submit" class="btn btn-warning d-block mx-auto my-3">{props.children}</button>
        </div>
    )
}
