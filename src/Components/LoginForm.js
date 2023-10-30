import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({setIsLogged}) => {
    const[formData,setFromData] = useState({
        email:"",password:""
    })
    const navigate = useNavigate();
    const[showPassword,setShowPassword]=useState(false);
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
        setIsLogged(true);
        toast.success("Logged In");
        navigate("/Dashboard");
    }
return (
    <form onSubmit={submitHandler} className=' flex flex-col w-full mt-4 gap-y-4'>
        <label className=' w-full'>
            <p className='text-[0.875rem] text-yellow-50 mb-1 leading-[1.375rem]'>Email Address</p>
        <input
        required
        type="email"
        value={formData.email}
        onChange={changeHandler}
        placeholder='Enter your Email'
        name="email"
        className=' bg-gray-250 rounded-[0.5rem] w-full p-[12px]'
        />
        </label>
        <label className=' w-full relative'>
            <p className='text-[0.875rem] text-yellow-50 mb-1 leading-[1.375rem]'>Password</p>
        <input
        required
        type={showPassword?"text":"password"}
        value={formData.password}
        onChange={changeHandler}
        placeholder='Enter your Password'
        name="password"
        className=' bg-gray-100 rounded-[0.5rem] w-full p-[12px]'
        />
        <span className=' absolute right-3 top-[38px] cursor-pointer' onClick={()=>setShowPassword(!showPassword)}>
            {showPassword?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye  fontSize={24} fill='#AFB2BF'/>)} 
        </span>
        <Link to="#"><p className=' text-xs mt-1 text-blue-300 max-w-max ml-auto'>Forgot Password</p></Link>
        </label>
        <button className=' bg-yellow-400 rounded font-medium text-black px-[12px] py-[8px]'> Sign In  </button>
    </form>
)
}

export default LoginForm
