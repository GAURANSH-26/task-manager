import React from 'react';
import { GrTask } from "react-icons/gr";
import { FaBookmark } from "react-icons/fa6";
import { FaCheckDouble } from "react-icons/fa";
import { MdCreditCardOff } from "react-icons/md";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const allTask = [
        {
            title: 'All Task',
            icon: <GrTask />,
            link:'/home/alltask'
        },
        {
            title: 'Important Task',
            icon: <FaBookmark />,
            link:'/home/important'
        },
        {
            title: 'Completed Task',
            icon: <FaCheckDouble />,
            link:'/home/complete'
        },
        {
            title: 'Incomplete Task',
            icon: <MdCreditCardOff />,
            link:'/home/incomplete'
        },
    ];

    return (
        <div className='flex flex-col justify-between h-full p-4'>
            <div>
                <h1 className='font-bold'>Username</h1>
                <p className='text-gray-500'>gaurnash22@gmail.com</p>
                <hr className='my-3 border-green-900' />
            </div>
            <div>
                <ul className='space-y-4'>
                    {allTask.map((item, index) => (
                        <Link key={index} to={item.link}>
                        <li
                            key={index}
                            className='flex items-center p-4 rounded-lg transition duration-300 cursor-pointer hover:bg-green-300'
                        >
                           <span className='mr-3 text-lg'>{item.icon}</span>
                           <span>{item.title}</span>
                        </li>
                           </Link>
                    ))}
                </ul>
            </div>
            <button className='p-3 bg-green-700 rounded-lg text-white font-bold hover:bg-green-600'>
                Logout
            </button>
        </div>
    );
};

export default Sidebar;
