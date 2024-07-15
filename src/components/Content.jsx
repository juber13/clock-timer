/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";

const Content = ({ users }) => {
  const {
    avatar_url,
    name,
    login,
    html_url,
    bio,
    public_repos,
    public_gists,
    created_at,
  } = users;
  return (
    <>
      <div className='card hover:shadow-none duration-200 border shadow-xl text-gray-800 rounded-lg md:flex  md:max-w-lg gap-8 lg:max-w-xl p-2 bg-white  '>
        <div className='image-container'>
          <img
            src={avatar_url}
            style={{ maxWidth: "250px" }}
            alt=''
            className='rounded-md h-full object-cover'
          />
        </div>
        <div className='details flex flex-col gap-3'>
          <div className='flex items-center justify-between'>
            <span className='max-w-fit border p-1 rounded-full text-xs'>
              Username<strong className=''> : {login}</strong>
            </span>
            <a href={html_url} target='_blank'>
              <FaGithub />
            </a>
          </div>
          <small className='max-w-fit border p-1 rounded-full text-xs'>
            Name : <strong>{name}</strong>
          </small>
          <small className='border p-1 rounded-md'>
            No. of public repos :{" "}
            <span className='font-semibold'>{public_repos}</span>{" "}
          </small>
          <small className='border p-1 rounded-md'>
            No. of public gist :{" "}
            <span className='font-semibold'>{public_gists} </span>
          </small>
          <small className='border p-1 rounded-md'>
            Profile created at :{" "}
            <span className='font-semibold'>{created_at.split("T")[0]}</span>
          </small>
          <small className='text-xs'>
            Bio : {bio ? bio : <strong>Not Provided</strong>}
          </small>
        </div>
      </div>
    </>
  );
};

export default Content;
