import React from 'react'

function Navbar() {
    return (
        <nav className='flex bg-green-400 text-white  justify-between py-2 '>
            <div className='Logo'>

            <span className='font-bold text-xl mx-5'>
                Todo
            </span>

            </div>
            <ul className='flex  text-white gap-6 mx-3'>
                <li className='cursor-pointer hover:font-bold transition-all duration-300'>Home</li>
                <li className='cursor-pointer hover:font-bold transition-all duration-300'>about</li>
            </ul>
        </nav>
    )
}

export default Navbar
