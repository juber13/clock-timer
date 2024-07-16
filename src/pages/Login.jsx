import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase';
import { toast } from 'react-toastify';

const Login = () => {
    const [userInfo, setUserInfo] = useState({});
    const navigate = useNavigate();

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            await signInWithEmailAndPassword(auth, userInfo.email, userInfo.password);
            toast.success("Logged in Successfully", { position: "top-center" });
            localStorage.setItem('user', "authenticated");
            navigate('/');

        } catch (error) {
            console.log(error);
        }

    }


    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <form onSubmit={handleSubmit} className='flex gap-2 flex-col border p-8 shadow-lg lg:w-[300px] rounded-md '>
                <div>
                    <h3>Login!</h3>
                </div>


                <div>
                    <label className='text-xs' htmlFor="email">Email</label>
                    <input required name='email' value={userInfo.email} onChange={handleInput} className='w-full outline-none text-sm p-1 px-2 border block rounded-md' type="text" placeholder='Email' />
                </div>


                <div>
                    <label className='text-xs' htmlFor="password">Password</label>
                    <input required name='password' value={useState.password} onChange={handleInput} className='w-full outline-none text-sm p-1 px-2 border block rounded-md' type="password" placeholder='Password' />
                </div>

                <div className='flex justify-between items-center'>
                    <button type='submit' className='p-2 text-xs mt-3 border none bg-green-700 hover:bg-green-500 rounded-md text-white'>Login</button>

                    <Link to="/register"><span className='text-xs underline text-blue-400'>Register new user</span></Link>
                </div>
            </form>
        </div>
    )
}

export default Login