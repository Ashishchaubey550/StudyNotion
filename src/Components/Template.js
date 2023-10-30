import React from 'react'
import frame from '../assets/frame.png'
import Signupform from './Signupform'
import LoginForm from './LoginForm'
import {FcGoogle} from 'react-icons/fc'


const Template = ({title,desc1,desc2,image,formtype,setIsLogged}) => {
return (
<div className='flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 justify-between'>
    <div className=' w-11/12 max-w-[450px]'>
    <h1 className=' text-white text-[1.783rem] font-semibold leading-[2.375rem]'>{title}</h1>
    <p className=' text-[1.1rem] leading-[1.625rem] mt-4'>
        <span className=' text-white'>{desc1}</span><br />
        <span className=' text-blue-300'>{desc2}</span>
    </p>
    {formtype==="Signup" ? (<Signupform setIsLogged={setIsLogged} />) : (<LoginForm setIsLogged={setIsLogged}/>)}
    <div className='flex w-full items-center gap-x-2 my-2'>
        <div className=' w-full  h-[1px] bg-gray-400'></div>
        <p className=' text-gray-400 font-medium leading-[1.375rem]'>OR</p>
        <div className=' w-full  h-[1px] bg-gray-400'></div>
    </div>
    <button className=' w-full flex items-center justify-center rounded-[8px] font-medium border-gray-400 text-yellow-50 border px-[12px] gap-x-2 py-[8px] mt-2'><FcGoogle/>Sign Up With Google</button>
    </div>
    <div className=' relative w-11/12 max-w-[450px] '>
        <img src={frame}
        alt='Image'
        width={558}
        height={504}
        loading='lazy'/>
        <img src={image}
        alt='Image'
        width={558}
        height={504}
        loading='lazy' className=' absolute -top-4 right-4'/>
    </div>
</div>
)
}

export default Template
