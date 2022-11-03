import React from "react";
import Navbar from "../Components/Navbar";
import LetKitPuraMax from "./img/img10.png";

import Accordion from "react-bootstrap/Accordion";
import "../Styles/Connaissezvous.css";

const Home = () => {
    return (
        <>
            <Navbar />
            {/* section title sommaire */}
            <section className="container-fluid">
                <section className="container">
                    <h3 className="text-info text-center py-5">
                        Connaissez-vous ?
                    </h3>
                    {/* Sommaire */}
                    <Accordion defaultActiveKey="0" className="sommaire">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                <p className="fs-2">Sommaire</p>
                            </Accordion.Header>
                            <Accordion.Body>
                                <div className="accorBody d-flex flex-column">
                                    <a href="#petkitPura">
                                        Litière Petkit Pura Max
                                    </a>
                                    <a href="#puraMax">
                                        Litière Pura Max
                                    </a>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    {/* ================== */}
                </section>
            </section>
            {/* section item 1 */}
            <section className="container-fluid pt-5" id="petkitPura">
                <div className="container">
                    <div className="row">
                        {/* ----------------- Img ----------------- */}
                        <div class="cards col-md-12 col-lg-6">
                            <div class="header">
                                <img src={LetKitPuraMax} alt="" />
                                <div class="details">
                                    <p class="textDetails">
                                        Modèle présenté PETKIT Pura Max Bac à
                                        litière Autonettoyante
                                        xSecure/élimination des odeurs
                                        automatique
                                    </p>
                                    <p class="textDetails">
                                        Consultez la présentation complète du
                                        produit sur le site suivant :
                                    </p>
                                    <p class="textDetails">
                                        <a href="https://lititere-automatique.fr">
                                            https://lititere-automatique.fr
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* ---------------- Text ---------------- */}
                        <div class="cards col-md-12 col-lg-6">
                            <h3 class="titleCard">
                                Robot Litière Petkit Pura Max
                            </h3>
                            <p class="textDetails">
                                Connaissez-vous la nouvelle génération de
                                litière autonettoyante connectée PETKIT PURA
                                MAX, avec un nouveau design et des améliorations
                                significatives par rapport aux générations
                                précédentes.
                            </p>
                            <p class="textDetails">
                                Cette litière autonettoyante est adaptée aux
                                différents types de chat de 1,5 kg à 8 kg et est
                                idéale pour accueillir plusieurs chats.
                            </p>
                            <p class="textDetails">
                                Son entrée relativement basse permet à des chats
                                de petite taille d’aller faire leurs besoins
                                sans effort et l'entrée plus large permet aux
                                plus gros chats d’être à l’aise à l’intérieur.
                            </p>
                            <p class="textDetails">
                                Possédant un large bac à déchets, cette litière
                                peut fonctionner en autonomie totale pendant 15
                                jours avec un seul chat. Finies les corvées de
                                litière !
                            </p>
                            <p class="textDetails">
                                Finies les corvées de litière !
                            </p>
                            <p class="titleCard">
                                <span>Application PETKIT</span>
                            </p>
                            <p class="textDetails">
                                Grâce à l’application PETKIT et ses fonctions,
                                vous allez du simple lancement de cycle de
                                nettoyage de la litière jusqu’au suivi de la
                                santé de votre animal. Les fonctionnalités de la
                                PURA MAX vous assure le confort et la sérénité
                                au quotidien pour votre compagnon.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* section item 2 */}
            <section className="container-fluid py-3" id="puraMax">
                <div className="container">
                    <div className="row">
                        {/* ----------------- Img ----------------- */}
                        <div class="cards col-md-12 col-lg-6">
                            <div class="header">
                                <img src={LetKitPuraMax} alt="" />
                                <div class="details">
                                    <p class="textDetails">
                                        Modèle présenté PETKIT Pura Max Bac à
                                        litière Autonettoyante
                                        xSecure/élimination des odeurs
                                        automatique
                                    </p>
                                    <p class="textDetails">
                                        Consultez la présentation complète du
                                        produit sur le site suivant :
                                    </p>
                                    <p class="textDetails">
                                        <a href="https://lititere-automatique.fr">
                                            https://lititere-automatique.fr
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* ---------------- Text ---------------- */}
                        <div class="cards col-md-12 col-lg-6">
                            <h3 class="titleCard">
                                Robot Litière Petkit Pura Max
                            </h3>
                            <p class="textDetails">
                                Connaissez-vous la nouvelle génération de
                                litière autonettoyante connectée PETKIT PURA
                                MAX, avec un nouveau design et des améliorations
                                significatives par rapport aux générations
                                précédentes.
                            </p>
                            <p class="textDetails">
                                Cette litière autonettoyante est adaptée aux
                                différents types de chat de 1,5 kg à 8 kg et est
                                idéale pour accueillir plusieurs chats.
                            </p>
                            <p class="textDetails">
                                Son entrée relativement basse permet à des chats
                                de petite taille d’aller faire leurs besoins
                                sans effort et l'entrée plus large permet aux
                                plus gros chats d’être à l’aise à l’intérieur.
                            </p>
                            <p class="textDetails">
                                Possédant un large bac à déchets, cette litière
                                peut fonctionner en autonomie totale pendant 15
                                jours avec un seul chat. Finies les corvées de
                                litière !
                            </p>
                            <p class="textDetails">
                                Finies les corvées de litière !
                            </p>
                            <p class="titleCard">
                                <span>Application PETKIT</span>
                            </p>
                            <p class="textDetails">
                                Grâce à l’application PETKIT et ses fonctions,
                                vous allez du simple lancement de cycle de
                                nettoyage de la litière jusqu’au suivi de la
                                santé de votre animal. Les fonctionnalités de la
                                PURA MAX vous assure le confort et la sérénité
                                au quotidien pour votre compagnon.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
