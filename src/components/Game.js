import { useState, useEffect, useContext } from "react";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import { ScoreContext } from "./ScoreContext";

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

import kotlin from "./cardIcons/kotlin.svg";
import svelte from "./cardIcons/svelte.svg";
import vim from "./cardIcons/vim.svg";
import vue from "./cardIcons/vue.svg";

const Game = () => {
    let MAX_LEVEL = 4;

    const [score, setScore] = useContext(ScoreContext);

    let [gameObj, setGameObj] = useState([
        [
            { src: Clang, text: "C" },
            { src: java, text: "Java" },
            { src: matlab, text: "Matlab" },
            { src: cpp, text: "C++" },
        ],
        [
            { src: go, text: "Go" },
            { src: ch, text: "C#" },
            { src: css, text: "CSS" },
            { src: html, text: "HTML" },
            { src: python, text: "Python" },
            { src: php, text: "PHP" },
        ],
        [
            { src: css, text: "CSS" },
            { src: node, text: "NodeJS" },
            { src: ruby, text: "Ruby" },
            { src: go, text: "Go" },
            { src: html, text: "HTML" },
            { src: php, text: "PHP" },
            { src: python, text: "Python" },
            { src: ch, text: "C#" },
        ],
        [
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
        [
            { src: ch, text: "C#" },
            { src: vim, text: "Vim" },
            { src: kotlin, text: "Kotlin" },
            { src: vue, text: "Vue" },
            { src: php, text: "PHP" },
            { src: html, text: "HTML" },
            { src: node, text: "NodeJS" },
            { src: go, text: "Go" },
            { src: ts, text: "TypeScript" },
            { src: haskell, text: "Haskell" },
            { src: react, text: "React" },
            { src: svelte, text: "Svelte" },
            { src: python, text: "Python" },
            { src: ruby, text: "Ruby" },
            { src: css, text: "CSS" },
            { src: js, text: "JavaScript" },
        ],
    ]);
    let [currentLevel, setCurrentLevel] = useState(0);
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
        levelCopy = shuffle(levelCopy);
        let gameObjCopy = [...gameObj];
        gameObjCopy[currentLevel] = levelCopy;
        setGameObj(gameObjCopy);
    };

    const increaseScore = () => {
        let scoreCopy = [...score];
        scoreCopy[0] = scoreCopy[0] + 1;
        setScore(scoreCopy);
    };

    const resetScore = () => {
        let scoreCopy = [...score];
        scoreCopy[0] = 0;
        setScore(scoreCopy);
    };

    useEffect(() => {
        if (score[0] > score[1]) {
            let scoreCopy = [...score];
            scoreCopy[1] = scoreCopy[0];
            setScore(scoreCopy);
        }
    }, [score]);

    useEffect(() => {
        if (clickedArr.length === gameObj[currentLevel].length) {
            //console.log(currentLevel)
            if (currentLevel !== MAX_LEVEL) {
                setCurrentLevel(currentLevel + 1);
                resetClickedArr();
            } else {
                resetClickedArr();
            }
        }
    }, [clickedArr]);


    const handleClick = (text) => {
        if (!checkRepeat(text)) {
            let arrClone = [...clickedArr];
            arrClone.push(text);
            setClickedArr(arrClone);
            increaseScore();
            shuffleGameLevel();
        } else {
            resetGame();
            resetScore();
        }
    };

    const resetClickedArr = () => {
        setClickedArr([]);
    };

    const checkRepeat = (text) => {
        //return true if the card text already exsits in the clickedArr
        let found = false;

        clickedArr.forEach((item) => {
            if (item === text) {
                found = true;
            }
        });
        return found;
    };

    const resetGame = () => {
        setCurrentLevel(0);
        resetClickedArr();
    };

    return (
        <div className="px-8 py-6 flex justify-center items-center flex-wrap w-full overflow-y-auto">
            <div className="text-center sm:text-lg md:text-xl lg:text-2xl mb-8 text-green-500 font-mono font-semibold">
                <span>level:{`${currentLevel + 1}`}/{`${MAX_LEVEL + 1}`}</span>
            </div>

            <div className="flex justify-center items-center flex-wrap w-full">
                {gameObj[currentLevel].map((item, i) => (
                    <motion.div
                        variants={{
                            hidden: {
                                opacity: 0,
                                scale: 0,
                            },
                            visible: (i) => ({
                                opacity: 1,
                                transition: {
                                    delay: i * 0.15,
                                },
                                scale: 1,
                            }),
                        }}
                        initial="hidden"
                        animate="visible"
                        key={uuidv4()}
                        custom={i}
                    >
                        <Card
                            svgSrc={item.src}
                            svgText={item.text}
                            handleClick={handleClick}
                            key={uuidv4()}
                        ></Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Game;
