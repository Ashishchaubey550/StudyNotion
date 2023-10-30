import React from 'react'
import logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast';
const Navbar = (props) => {
    let isLogged = props.isLogged;
    let setIsLogged = props.setIsLogged;
return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
    <Link to="/" >  
        <img src={logo} alt='logo' width={160} height={32} loading='lazy'/>
    </Link>
    <nav>
        <ul className=' text-yellow-50 flex gap-x-6'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/About">About</Link>
            </li>
            <li>
                <Link to="/Contact">Contact</Link>
            </li>
        </ul>
    </nav>
    <div className='flex items-center gap-x-4 text-yellow-50 '>
        { !isLogged &&
        <Link to="/Login">
            <button className='bg-gray-700 py-[8px] px-[12px] rounded-[8px] border border-greyyellow-600'>Login</button>
        </Link>
        }
        { !isLogged &&
        <Link to="/Signup">
            <button className='bg-gray-700 py-[8px] px-[12px] rounded-[8px] border border-greyyellow-600'>Singup</button>
        </Link>
        }
        { isLogged &&
        <Link to="/">
            <button className='bg-gray-700 py-[8px] px-[12px] rounded-[8px] border border-greyyellow-600' onClick={()=>{
                setIsLogged(false);
                toast.success("Logged Out");
            }}>Logout</button>
        </Link>
        }
        { isLogged &&
        <Link to="/Dashboard">
            <button className='bg-gray-700 py-[8px] px-[12px] rounded-[8px] border border-greyyellow-600'>Dashboard</button>
        </Link>
        }
        </div>
    </div>
)
}

export default Navbar
