import React, { useRef } from 'react'
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';

const SingleEvent = ({data}) => {
  const inputEmail=useRef();
  console.log(inputEmail);
  const router=useRouter();
  const [message,setMessage]=useState("");

  const onSubmit=async(e)=>{
    e.preventDefault();
    
    const emailValue=inputEmail.current.value;
    const eventId=router.query.id;
    try{
//Post fetch request
// body-emailValue and the eventId
  const response= await fetch('/api/email-registration',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({email:emailValue,eventId})
  });
  if(!response.ok) throw new Error(`Error:${response.status}`);
  const data=await response.json();
  setMessage(data.message);
  console.log('POST',data);
    }

    catch(e){
     console.log(e,'Error');
    }

  };
  return (
    <div className='event_single_page'>
    <h1>{data.title}</h1>
   <Image src={data.image} width={500} height={300} alt={data.title}></Image>
  
   <p>{data.description}</p>
   <form onSubmit={onSubmit} className="email_registration">
   <label>Get Registered for this event</label>
   <input ref={inputEmail}type="email" id="email" placeholder='Please insert your email'/><button type="submit">Submit</button>
   </form>
   <p>{message}</p>
</div>

  )
}

export default SingleEvent