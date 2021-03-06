import React, {useState, createContext} from 'react'

export const ScoreContext = createContext();

export const ScoreProvider = (props) => {
    //[score, bestScore]
    const [score, setScore] = useState([0,0])
    return (
        <ScoreContext.Provider value={[score, setScore]}>
            {props.children}
        </ScoreContext.Provider>
    )
}


