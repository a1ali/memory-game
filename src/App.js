import Header from "./components/Header";
import Card from "./components/Card";
import Type from "./components/Type";

function App() {
    return (
        <div className="bg-gray-900 h-screen bg-hero-pattern bg-no-repeat bg-cover">
            <Header></Header>
            <Type></Type>
            <Card></Card>
        </div>
    );
}

export default App;
