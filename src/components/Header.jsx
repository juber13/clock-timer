/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FaGithub } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Header = ({
    setSearchText,
    searchText,
    fetchUser,
    users,
    handleSubmit,
}) => {
    return (
        <>
            {users !== null ? (
                <div className='p-4  flex items-center  justify-between shadow-md border font-semibold '>
                    <div className='icons text-4xl'>
                        <a href='/'>
                            <FaGithub />
                        </a>
                    </div>

                    <div className='search-bar-container'>
                        <form onSubmit={handleSubmit} className='border rounded-md '>
                            <input
                                value={searchText}
                                onChange={e => setSearchText(e.target.value)}
                                className=' p-2 text-sm rounded-md outline-none'
                                type='search'
                                placeholder='userName...'
                            />
                            <button className='text-xs border-l  p-1' type='submit'>
                                <CiSearch className='text-1xl' />
                            </button>
                        </form>
                    </div>
                </div>
            ) : (
                ""
            )}
        </>
    );
};

export default Header;
