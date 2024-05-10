import React, { useEffect, useState } from 'react'

function Github() {
    const [data , setdata] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/anand06amar')
        .then(response=> response.json())
        .then(data => {
            console.log(data);
            setdata(data)

        })
    },[])
  return (
    <>
     <div  >Github followers: {data.followers} </div>
     <img src={data.avatar_url} width={300} />
     </>
   
  )
}

export default Github