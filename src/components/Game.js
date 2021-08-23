import Card from "./Card";

import Clang from "./cardIcons/c.svg";
import ch from "./cardIcons/ch.svg";
import cpp from "./cardIcons/cpp.svg";
import css from "./cardIcons/css.svg";
import go from "./cardIcons/go.svg";
import haskell from "./cardIcons/haskell.svg";
import html from "./cardIcons/html.svg";
import java from "./cardIcons/java.svg";
import js from "./cardIcons/js.svg";
import matlab from "./cardIcons/matlab.svg";
import node from "./cardIcons/node.svg";
import php from "./cardIcons/php.svg";
import python from "./cardIcons/python.svg";
import react from "./cardIcons/react.svg";
import ruby from "./cardIcons/ruby.svg";
import ts from "./cardIcons/ts.svg";

let gameObj = {
    level1: [
        { src: Clang, text: "C" },
        { src: java, text: "Java" },
        { src: matlab, text: "Matlab" },
        { src: cpp, text: "C++" },
    ],
};

const Game = () => {
    return (
        <div className="px-8 py-6 flex justify-center items-center flex-wrap w-full">
            <img src="Clang" alt="" />
            {gameObj.level1.map((item) => (
                <Card svgSrc={item.src} svgText={item.text}></Card>
            ))}
        </div>
    );
};

export default Game;
