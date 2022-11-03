import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import "../Styles/Home.css";

const Home = () => {
    return (
        <>
            <Navbar />
            <section className="container-fluid">
                <iframe
                    class="heroVideo"
                    src="https://www.youtube-nocookie.com/embed/U9OBp177_M8?autoplay=1&controls=0&showinfo=0&mute=1&loop=1"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
                <div className="container header text-intro">
                    <h1 className="heroH1">Arbres à Chat</h1>
                    <p className="heroP text-center font-italic">
                        Bienvenue sur notre site de sélection pour vous aider à
                        choisir et acheter l'arbre à chat qui vous convient.
                    </p>
                    <div className="btn-center">
                        <Link
                            to="/guideachat"
                            className="btn btn-lg btn-outline-light"
                        >
                            GUIDE D'ACHAT
                        </Link>
                        <Link
                            to="/promo"
                            className="btn btn-lg btn-outline-light"
                        >
                            PROMOTIONS
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
