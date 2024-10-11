import React, { useState } from 'react';

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange=(e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const handleSubmit=async(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    try{const response=await fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            },
            body:JSON.stringify(formData)
    });
    const data=await response.json();
    console.log(data);}
    catch(error){
        console.log(error);
    }
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" value={formData.message} onChange={handleChange}/>

      <button type="submit">Submit</button>
    </form>
    <ul>
        <li>Name: {formData.name}</li>
        <li>Email: {formData.email}</li>
        <li>Message: {formData.message}</li>
      </ul>
    </>
  );
};

export default Form;