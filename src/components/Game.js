import { useState } from "react";
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

// let gameObj = {
//     1: [
//         { src: Clang, text: "C" },
//         { src: java, text: "Java" },
//         { src: matlab, text: "Matlab" },
//         { src: cpp, text: "C++" },
//     ],
//     2: [
//         { src: go, text: "Go" },
//         { src: ch, text: "C#" },
//         { src: css, text: "CSS" },
//         { src: html, text: "HTML" },
//         { src: python, text: "Python" },
//         { src: php, text: "PHP" },
//     ],
//     3: [
//         { src: css, text: "CSS" },
//         { src: node, text: "NodeJS" },
//         { src: ruby, text: "Ruby" },
//         { src: go, text: "Go" },
//         { src: html, text: "HTML" },
//         { src: php, text: "PHP" },
//         { src: python, text: "Python" },
//         { src: ch, text: "C#" },
//     ],
//     4: [
//         { src: js, text: "JavaScript" },
//         { src: ch, text: "C#" },
//         { src: html, text: "HTML" },
//         { src: php, text: "PHP" },
//         { src: python, text: "Python" },
//         { src: react, text: "React" },
//         { src: node, text: "NodeJS" },
//         { src: go, text: "Go" },
//         { src: ts, text: "TypeScript" },
//         { src: haskell, text: "Haskell" },
//         { src: ruby, text: "Ruby" },
//         { src: css, text: "CSS" },
//     ],
// };

const Game = () => {
    let [gameObj, setGameObj] = useState({
        1: [
            { src: Clang, text: "C" },
            { src: java, text: "Java" },
            { src: matlab, text: "Matlab" },
            { src: cpp, text: "C++" },
        ],
        2: [
            { src: go, text: "Go" },
            { src: ch, text: "C#" },
            { src: css, text: "CSS" },
            { src: html, text: "HTML" },
            { src: python, text: "Python" },
            { src: php, text: "PHP" },
        ],
        3: [
            { src: css, text: "CSS" },
            { src: node, text: "NodeJS" },
            { src: ruby, text: "Ruby" },
            { src: go, text: "Go" },
            { src: html, text: "HTML" },
            { src: php, text: "PHP" },
            { src: python, text: "Python" },
            { src: ch, text: "C#" },
        ],
        4: [
            { src: js, text: "JavaScript" },
            { src: ch, text: "C#" },
            { src: html, text: "HTML" },
            { src: php, text: "PHP" },
            { src: python, text: "Python" },
            { src: react, text: "React" },
            { src: node, text: "NodeJS" },
            { src: go, text: "Go" },
            { src: ts, text: "TypeScript" },
            { src: haskell, text: "Haskell" },
            { src: ruby, text: "Ruby" },
            { src: css, text: "CSS" },
        ],
    });
    let [currentLevel, setCurrentLevel] = useState(1);
    let [clickedArr, setClickedArr] = useState([]);

    const shuffle = (array) => {
        // Fisher-Yates (aka Knuth) Shuffle
        var currentIndex = array.length,
            randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex],
                array[currentIndex],
            ];
        }

        return array;
    };

    const shuffleGameLevel = () => {
        
        let levelCopy = [...gameObj[currentLevel]];
        //console.log(levelCopy)
        levelCopy = shuffle(levelCopy);
        //console.log(levelCopy)
        setGameObj({ ...gameObj, currentLevel: levelCopy });
    };

    const handleClick = (text) => {
        if (!checkRepeat(text)) {
            let arrClone = [...clickedArr];
            arrClone.push(text);
            setClickedArr(arrClone);
            shuffleGameLevel();
        } else {
            resetGame();
        }
    };

    const resetClickedArr = () => {
        setClickedArr([]);
    };

    const checkRepeat = (text) => {
        //return true if the card text already exsits in the clickedArr
        clickedArr.forEach((item) => {
            console.log(item)
            if (item === text) {
                return true;
            }
        });
        return false;
    };

    const resetGame = () => {
        setCurrentLevel(1);
        resetClickedArr();
    };

    return (
        <div className="px-8 py-6 flex justify-center items-center flex-wrap w-full">
            {gameObj[currentLevel].map((item) => (
                <Card
                    svgSrc={item.src}
                    svgText={item.text}
                    handleClick={handleClick}
                ></Card>
            ))}
        </div>
    );
};

export default Game;
