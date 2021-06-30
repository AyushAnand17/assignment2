import React, {  useEffect, useState } from 'react';
import axios from "axios";

const CompA =()=>{
const[num,setName]=useState("1");

 const[data,setdata]=useState("");
 useEffect(()=>{
    axios.get("https://reqres.in/api/users?page="+num)
    .then((res)=>{
       console.log(res.data.data);
       setdata(res.data)

   
    })
 },[num])

    
    return (
    <>
    <h1>Hey!! Details on page {num}</h1>
    {data && data.data.map((item)=>{
        return (<p key={item.id}>
            {item.first_name}
        </p>)
        

    }
    
    
    )}
   <button onClick={()=> setName(2)}>Page 2</button>
   <button onClick={()=> setName(1)}>Page  1</button>
    </>
    )
};

export default CompA;
