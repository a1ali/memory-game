import React from 'react'

const Header = () => {
    let score = 5;
    let best = 6;
    return (
        <div className="flex items-center justify-between px-7 py-4 w-full bg-gray-900 border-b bg-opacity-80 blur border-gray-100 border-opacity-10">
            <div className="">
                <span className="sm:text-xl md:text-4xl font-semibold text-gray-200">Memory Card</span>
            </div>
            
            <div className="md:text-xl text-gray-200">
                <span>{`Score: ${score} |`}</span>
                <span>{` Best: ${best}`}</span>
            </div>
            
            
        </div>
    )
} 

export default Header
