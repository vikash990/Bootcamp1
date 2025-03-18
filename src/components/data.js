import { useEffect,useState } from "react";

const UserData=()=>{

    const [data,setData]=useState([]);
  
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setData(json)).then(()=>console.log(data))
    },[])

    return(
        <div>
          {
        
            data && data.length && data.map((ele)=>{
                return(
                    <div>
                        <p>{ele.title}</p>
                    </div>
                )
            })
          }

        </div>
    )
}

export default UserData;