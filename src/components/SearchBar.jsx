/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";



const SearchBar = ({ setSearchText, searchText, handleSubmit }) => {

    return (
        <div className='w-full flex flex-col gap-3 items-center justify-center'>
            <h2 className='text-4xl font-semibold text-gray-600 flex items-center gap-3'>Search <span><FaGithub /></span></h2>
            <form onSubmit={handleSubmit} className='border flex justify-between rounded-md shadow-md p-2 bg-white lg:w-[500px] focus:shadow-none'>
                <input value={searchText} onChange={(e) => setSearchText(e.target.value)} className='outline-none p-2 w-[80%]' type="text" placeholder='userName' />
                <button type='submit' className='p-2 border-l-2 text-center'><CiSearch /></button>
            </form>
        </div>
    )
}

export default SearchBar