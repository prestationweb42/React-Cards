import React from "react";
import Navbar from "../Components/Navbar";
import "../Styles/Home.css";

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid py-3">
                <h3 className="text-info text-center mt-3">
                    home
                </h3>
                <div className="container">
                    <h3>section 1</h3>
                </div>
                <div className="container mt-3">
                    <h3>section 2</h3>
                </div>
            </div>
        </>
    );
};

export default Home;
