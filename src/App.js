import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Promo from "./Pages/Promo";
import Connaissezvous from "./Pages/Connaissezvous";
import Guideachat from "./Pages/Guideachat";

function App() {
    return (
        <div className="App">
            <BrowserRouter basename="/tothepoint_login">
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* path="*" fonctionne si l'url ne correspond à rien  */}
                    <Route path="*" element={<Home />} />
                    <Route path="/guideachat" element={<Guideachat />} />
                    <Route path="/promo" element={<Promo />} />
                    <Route path="/connaissezvous" element={<Connaissezvous />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
