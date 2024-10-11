
import { useState, useEffect } from "react";

interface posts{
    id: number;
    title:string,
    body: string,
}

const Featching:React.FC=()=>{
    const [data,setData]=useState<posts[]>([]);
    useEffect(()=>{
        const dataFetching = async()=>{
            try{
        const response=await fetch('https://jsonplaceholder.typicode.com/posts');
        const res=await response.json();
        setData(res)
        }
        catch(error){
            console.error(error);
            }
    }
    dataFetching();
    },[]);
    return(
        <div>
            <h1>Posts</h1>
            {data.map((d)=>(
                <div key={d.id}>
                    <h3>{d.title}</h3>
                    <p>{d.body}</p></div>
            ))}
        </div>
    )
}

export default Featching;