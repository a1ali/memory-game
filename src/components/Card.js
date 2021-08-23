const Card = ({ svgSrc, svgText }) => {
    return (
        <div className="rounded-lg flex flex-col space-y-2 justify-center items-center cursor-pointer p-4 bg-gray-600 md:w-44 md:h-52 mx-4 my-2 border border-opacity-20 bg-opacity-50 blur shadow-lg transform ease-in duration-200 hover:scale-105">
            <img src={svgSrc} className="" alt="" />
            <span className="text-gray-200 text-lg font-semibold ">
                {svgText}
            </span>
        </div>
    );
};

export default Card;
