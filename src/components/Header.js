import React, { useContext } from "react";
import { ScoreContext } from "./ScoreContext";

const Header = () => {
    const [score, setScore] = useContext(ScoreContext);
    // let currentScore = score[0];
    // let best = score[1];
    return (
        <div className="flex items-center justify-between px-7 py-4 w-full bg-gray-900 border-b bg-opacity-80 blur border-gray-100 border-opacity-10 sticky top-0">
            <div className="">
                <span className="sm:text-xl md:text-4xl font-semibold text-gray-200">
                    Memory Card
                </span>
            </div>

            <div className="md:text-xl text-gray-200">
                <span>{`Score: ${score[0]} |`}</span>
                <span>{` Best: ${score[1]}`}</span>
            </div>
        </div>
    );
};

export default Header;
