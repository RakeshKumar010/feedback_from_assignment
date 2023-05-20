import React, { useState } from 'react'
import assets_1 from '../assets/assets1.png'
import { useNavigate } from 'react-router-dom'
const Form = () => {
    const navigater = useNavigate();
    const [data,setData]=useState({
        name:"",
        email:"",
        subject:"",
        query:"",
        image:"",
        number:"",
        selection:""
    })

    const submitFun =async (e)=>{
        e.preventDefault()
        
        let result = await fetch('https://feedback-from-assignment.onrender.com/',{
            method:"post",
            body:JSON.stringify(data),
            headers:{"content-type":"application/json"}
        })
        result =await result.json()
        if(result){
            navigater('/alldata')
        }

    }
    const changeFun = (e)=>{
        const{value,name} = e.target;
        setData((obj)=>{
            return({
                ...obj,
                [name]:value
            })
        }) 
        

    }
    return (
        <div className='form_main'>
            <form className='form' action="/profile" method="post" encType="multipart/form-data" onSubmit={submitFun}>
                <div className='form_div'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' onChange={changeFun} />
                </div>

                <div className='form_div'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" onChange={changeFun}/>
                </div>

                <div className='form_div'>
                    <label htmlFor="subject">Subject</label>
                    <input type="text" name='subject' onChange={changeFun}/>
                </div>

                <div className='form_div'>
                    <label htmlFor="query">Mention Your Query Here</label>
                    <textarea name="query" cols="20" rows="5" onChange={changeFun} ></textarea>
                </div>
                <div className='form_div'>
                    <label htmlFor="file" >Attachments</label>
                    <input type="file" name="image" onChange={changeFun}/>
                </div>

                <div className='form_div' id='dubble_column'>
                    <div>
                        <label htmlFor="number">Contact Number</label>
                        <input type="number" name="number" className='dubble_column_input' onChange={changeFun}/>
                    </div>
                    <div>
                        <label htmlFor="selection">How critical is your request?</label>
                        <select name="selection" className='dubble_column_input' onChange={changeFun}>
                            <option value="none">Select</option>
                            <option value="low">Low</option>
                            <option value="hign">High</option>
                            <option value="middle">Middle</option>

                        </select>
                    </div>
                </div>
                <div className='btn_or_details'>
                    <div className='btn_or_details_div'>
                        <button className='btn_or_details_div_btn'>Send</button>
                        <button className='btn_or_details_div_btn' type='reset'>Cancel</button>
                    </div>
                    <div>
                        <h3>AIVision Helpline: +91-9924300511</h3>
                        <p>Mon - Fri 10:00AM - 7:00PM </p>
                    </div>
                </div>

            </form>
            <div className='image_side'>
                <h1>FeedBack Form</h1>
            <img src={assets_1} alt="png" className='image' />
            <p onClick={()=>{
                navigater('/alldata')
            }}>All Data</p> 
            </div>
        </div>
    )
}

export default Form