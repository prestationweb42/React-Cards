import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import Promo from "./Pages/Promo";

function App() {
    return (
        <div className="App">
            <Home />
            <Promo />
        </div>
    );
}

export default App;
