import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { setDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';

const Register = () => {
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
        console.log(userData)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, userData.email, userData.password);
            const user = auth.currentUser;
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    userData
                });
            }
            toast.success("Register successful", { position: "top-center" });
            setTimeout(() => {
                navigate('/');
            }, 5000)
        } catch (err) {
            console.log(err);
            toast.error(err.message, { position: "top-center" });
        }
    };

    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <form onSubmit={handleSubmit} className='flex gap-2 flex-col border p-8 shadow-lg lg:w-[300px] rounded-md '>
                <div>
                    <h3>Register!</h3>
                </div>
                <div>
                    <label className='text-xs' htmlFor="name">Name</label>
                    <input name='name' required value={userData.name} onChange={handleInput} className='w-full outline-none text-sm p-1 px-2 border block rounded-md' type="text" placeholder='name' />
                </div>

                <div>
                    <label className='text-xs' htmlFor="email">Email</label>
                    <input name='email' required value={userData.email} onChange={handleInput} className='w-full outline-none text-sm p-1 px-2 border block rounded-md' type="text" placeholder='Email' />
                </div>

                <div>
                    <label className='text-xs' htmlFor="phone">Phone Number</label>
                    <input name='phone' required value={userData.phone} onChange={handleInput} className='w-full outline-none text-sm p-1 px-2 border block rounded-md' type="text" placeholder='Mobile No' />
                </div>

                <div>
                    <label className='text-xs' htmlFor="password">Password</label>
                    <input name='password' required value={userData.password} onChange={handleInput} className='w-full outline-none text-sm p-1 px-2 border block rounded-md' type="password" placeholder='Password' />
                </div>

                <div className='flex justify-between items-center'>
                    <button type='submit' className='p-2 text-xs mt-3 border none bg-green-700 hover:bg-green-500 rounded-md text-white'>Register</button>

                    <Link to="/login"><span className='text-xs underline text-blue-400'>Already a user</span></Link>
                </div>
            </form>
        </div>
    )
}

export default Register