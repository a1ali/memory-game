import React from "react";

const Card = ({svg, }) => {
    
    return (
        <div className="rounded-lg flex items-center cursor-pointer bg-gray-600 w-32 h-40 mx-52 my-4 border border-opacity-20 bg-opacity-50 blur shadow-lg transform ease-in duration-200 hover:scale-105">
            <img src="cpp.svg" alt="" />
        </div>
    );
};

export default Card;
