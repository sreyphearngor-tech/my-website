import React, { useState } from 'react'
import './UsestateHook.css'
const UsestateHook = () => {
  const[name,SetName]=useState("Sok Dara");
    const[gender,SetGender]=useState("fmale");
    const[age,SetAge]=useState(20);
    const[prf,Setprf]=useState("https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png");
    return (
   <div className='w-100 vh-100 gap-2 d-flex justify-content-center align-items-center '>
    <form className=' box-frm rounded-2  ' action="#" >
        <input onChange={(e)=>SetName(e.target.value)} className='form-control ' type="text" placeholder='value name'/>
           <input onChange={(e)=>SetGender(e.target.value)} className='form-control ' type="text" placeholder='value gender'/>
                   <input onChange={(e)=>SetAge(e.target.value)} className='form-control ' type="text" placeholder='value age'/>
                           <input onChange={(e)=>Setprf(e.target.value)} className='form-control ' type="text" placeholder='value profile'/>
    </form>
    <div className='box-prf rounded-3 shadow p-3 '>
        <img src={prf} alt=""className='w-100 object-fit-cover rounded-top-3' />
        <h4 className='mt-1'>{name}</h4>
        <p className='fs-6'>{gender}</p>
        <p className='fs-6 '> {age}</p>
    </div>
   </div>
   
  )
}

export default UsestateHook
