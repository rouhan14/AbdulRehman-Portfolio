import React from 'react'
import {useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import './Contact.css'

const Contact = () => {
    const form = useRef()
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        message:''
    })

    const DataFiller =(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})

    }


    const sendEmail =(e)=>{
        e.preventDefault()
        if(formData.name!=='' &&formData.email!=='' && formData.message!==''){
            emailjs.sendForm('service_4p4mrc4', 'template_uz25u95',form.current, 'qwDzZQvPGWpKVYUkd').then(setFormData({
        name:'',
        email:'',
        message:''
    }))
        }
        else{
            console.log('provide all fields')
        }

    }
    return (
    <div id='contact' className='main_form_div'>
        <h2 className='allHeadings'>Lets Connect</h2>
        <div className='underline'></div>
        <form className='form_div' action="" ref={form}>
            <input className='input' type="text" name='name' value={formData.name} onChange={(e)=>DataFiller(e)} placeholder='Enter your Name' />
            <input className='input' type="email" name='email' value={formData.email} onChange={(e)=>DataFiller(e)} placeholder='Enter your Email' />
            <textarea className='message' type="text" name='message' value={formData.message} onChange={(e)=>DataFiller(e)} placeholder='Enter your Message' />
            <button className='btn' onClick={sendEmail}>Send</button>
        </form>
    </div>
    )
}

export default Contact