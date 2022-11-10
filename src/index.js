import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

App.use(express.static(__dirname)); //here is important thing - no static directory, because all static :)

App.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
