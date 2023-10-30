import React, { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Signupform = ({prevData}) => {
    const navigate = useNavigate();
    const[formData,setFromData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })
    const [showPassword,setShowPassword]=useState(false);
    const[password , setpassword]=useState(false);
    const[accounttype , setaccounttype] =useState("Student");
    function changeHandler(event){
        setFromData((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }
    function submitHandler(event){
        event.preventDefault();
        if(formData.password!=formData.confirmPassword){
            toast.error("Check Confirm Password")
        }else {
            toast.success("New Account Created");
            navigate("/Login")
            const accountData={
                ...prevData
            }
            console.log("Print Data");
            console.log(accountData);
        };
    }
return (
    <div>
        <div className=' flex bg-slate-500 p-1 gap-x-1 my-6 rounded-full max-w-max'>
            <button className={`${accounttype==="student"?" bg-gray-400 text-yellow-100":" bg-transparent text-yellow-100"} py-2 px-5 rounded-full transition-all duration-200`} onClick={()=>{setaccounttype("student")}} >Student</button>
            <button className={`${accounttype==="Instructor"?" bg-gray-400 text-yellow-100":" bg-transparent text-yellow-100"} py-2 px-5 rounded-full transition-all duration-200`} onClick={()=>{setaccounttype("Instructor")}} >Instructor</button>
        </div>
        <form onSubmit={submitHandler}>
            {/* First and Last Name */}
            <div className=' flex flex-row gap-10'>
            <label className=' relative'>
                <p className='text-[0.875rem] text-yellow-50 mt-2 leading-[1.375rem]'>First Name</p>
                <input type="text" required name='firstName' onChange={changeHandler} placeholder='Enter First Name' value={formData.firstName}  className=' bg-gray-100 rounded-[0.5rem] w-full p-[12px]'/>
            </label>
            <label className=' relative'>
                <p className='text-[0.875rem] text-yellow-50 mt-2 leading-[1.375rem]'>Last Name</p>
                <input type="text" required name='lastName' onChange={changeHandler} placeholder='Enter Last Name' value={formData.lastName} className=' bg-gray-100 rounded-[0.5rem] w-full p-[12px]' />
            </label>
            </div>
            {/* Email */}
            <label className=' relative'>
                <p className='text-[0.875rem] text-yellow-50 mt-2 leading-[1.375rem]'>Email</p>
                <input type="email" required name='email' onChange={changeHandler} placeholder='Enter Email' value={formData.email} className=' bg-gray-100 rounded-[0.5rem] w-full p-[12px]' />
            </label>
            {/* create password and confirm password */}
            <div className=' flex flex-row gap-10'>
            <label className=' relative'>
                <p className='text-[0.875rem] text-yellow-50 mt-2 leading-[1.375rem]'>Password</p>
                <input type={showPassword ?"text":"password"} required name='password' onChange={changeHandler} placeholder='Enter Password' value={formData.password} className=' bg-gray-100 rounded-[0.5rem] w-full p-[12px]' />
                <span className=' absolute right-3 top-[45px] cursor-pointer' onClick={()=>setShowPassword(!showPassword)}>
                    {showPassword?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />):(<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                </span>
            </label>
            <label className=' relative'>
                <p className='text-[0.875rem] text-yellow-50 mt-2 leading-[1.375rem]'>Confirm Password</p>
                <input type={password ?"text":"password"} required name='confirmPassword' onChange={changeHandler} placeholder='Confirm Password' value={formData.confirmPassword} className=' bg-gray-100 rounded-[0.5rem] w-full p-[12px]'/>
                <span className=' absolute right-3 top-[45px] cursor-pointer' onClick={()=>setpassword(!password)}>
                    {password?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />):(<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                </span>
            </label>
            </div>
            <button className=' mt-5 w-full bg-yellow-400 rounded font-medium text-black px-[8px] py-[8px]'> Create Account </button>
        </form>
    </div>
)
}

export default Signupform
