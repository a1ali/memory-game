import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <div className="text-center sm:text-lg md:text-xl lg:text-2xl text-green-500 font-mono py-4 px-7 font-semibold">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .changeDelay(70)
                        .typeString("Put your memory to the test ")
                        .pauseFor(500)
                        .deleteAll()
                        
                        .typeString(
                            "Click on a card but not more than once!"
                        )
                        .start();
                }}
            />
        </div>
    );
};

export default Type;
