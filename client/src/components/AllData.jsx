import React, { useEffect, useState } from 'react'
import './AllData.css'
import { useNavigate } from 'react-router-dom'
const AllData = () => {
    const navigater = useNavigate()
    const [data, setData] = useState()
    useEffect(() => {
        async function getFun() {
            let result = await fetch('http://localhost:8080/alldata', {
                method: "get",
                headers: { 'content-type': 'application/json' },
            })
            result = await result.json()
            setData(result);
        }
        getFun()
    })
    return (
        <>
        <div className='alldata_main'>

            <p className='back' onClick={()=>{
                navigater('/')
            }}>Back</p>          

            <div className='alldata'>
                <div className="header">
                    <p>Name</p>
                    <p className='email'>Email</p>
                    <p>Mobile</p>
                    <p>Subject</p>
                    <p>Query</p>
                    <p>selection</p>
                    <p>Delete</p>
                </div>
            <div className='footer_main'>
                {
                    data && data.map((val) => {
                        return (<div className='footer' key={val._id}>
                            <p>{val.name}</p>
                            <p className='email'>{val.email}</p>
                            <p>{val.number}</p>
                            <p>{val.subject}</p>
                            <p>{val.query}</p>
                            <p>{val.selection}</p>
                            <div> <button onClick={async()=>{
                                let result = await fetch(`http://localhost:8080/alldata/${val._id}`,{
                                    method:"delete",
                                    headers:{"content-type":"application/json"}
                                })
                                console.log(result);
                            }}>Delete</button></div>

                        </div>)
                    })
                }
                </div>
            </div>
        </div>
        </>
    )
}

export default AllData