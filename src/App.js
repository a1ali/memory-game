import Header from "./components/Header";
//import Card from "./components/Card";
import Type from "./components/Type";
import Game from "./components/Game";
import { ScoreProvider } from "./components/ScoreContext";

function App() {
    return (
        <div className="">
            <ScoreProvider>
                <Header></Header>
                <Type></Type>
                <Game></Game>
            </ScoreProvider>
        </div>
    );
}

export default App;
