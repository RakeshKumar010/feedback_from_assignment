import React from 'react'
import assets_1 from '../assets/assets1.png'
const Form = () => {
    return (
        <div className='form_main'>
            <form className='form'>
                <div className='form_div'>
                    <label htmlFor="name">Name</label>
                    <input type="text" />
                </div>

                <div className='form_div'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" />
                </div>

                <div className='form_div'>
                    <label htmlFor="subject">Subject</label>
                    <input type="text" />
                </div>

                <div className='form_div'>
                    <label htmlFor="query">Mention Your Query Here</label>
                    <textarea name="query" cols="20" rows="5"></textarea>
                </div>
                <div className='form_div'>
                    <label htmlFor="attachments" >Attachments</label>
                    <input type="file" name="attachments" />
                </div>

                <div className='form_div' id='dubble_column'>
                    <div>
                        <label htmlFor="number">Contact Number</label>
                        <input type="number" name="number" className='dubble_column_input' />
                    </div>
                    <div>
                        <label htmlFor="selection">How critical is your request?</label>
                        <select name="selection" className='dubble_column_input'>
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
            </div>
        </div>
    )
}

export default Form