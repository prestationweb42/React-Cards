import React from "react";
import Navbar from "../Components/Navbar";
import Cards from "../Components/Cards";
import Promotions from "../Backend/Promotions";
import Accordion from "react-bootstrap/Accordion";
import "../Styles/Promo.css";

const Promo = () => {
    return (
        <>
            <Navbar />
            <section id="€20-50" className="container-fluid py-5">
                <h1 className="text-success text-center mt-3">
                    Promotions de notre partenaire sur les arbres à chat pour un
                    budget compris entre <span>20</span> € et <span>50</span> €
                </h1>
                <h2 className="text-center mt-3 sub-title">
                    Attention aux dates limites
                </h2>
                <div className="container">
                    <p className="fs-2 mt-3">
                        Dernière mise à jour : 01/11/2022
                    </p>
                    {/* Sommaire */}
                    <Accordion defaultActiveKey="0" className="sommaire">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="fs-1">
                                <p className="fs-2">Sommaire</p>
                            </Accordion.Header>
                            <Accordion.Body>
                                <div className="accorBody d-flex flex-column">
                                    <a href="#€€20-50">
                                        Budget entre 20 et 50 €
                                    </a>
                                    <a href="#€50-100">
                                        Budget entre 50 et 100 €
                                    </a>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    {/* ================== */}
                    <div className="row" id="€€20-50">
                        {Promotions.products.map((item, index) => {
                            return (
                                <Cards
                                    img={item.img}
                                    promo={item.promo}
                                    limit={item.limit}
                                    title={item.title}
                                    desc={item.desc}
                                    price={item.price}
                                    key={index}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
            <section id="€50-100" className="container-fluid py-5">
                <h2 className="text-success text-center mt-3">
                    Promotions de notre partenaire sur les arbres à chat pour un
                    budget compris entre <span>50</span> € et <span>100</span> €
                </h2>
                <h3 className="text-center my-3">
                    Attention aux dates limites
                </h3>
                <div className="container">
                    <p className="fs-2 mt-3">
                        Dernière mise à jour : 01/11/2022
                    </p>
                    <div className="row">
                        {Promotions.products.map((item, index) => {
                            return (
                                <Cards
                                    img={item.img}
                                    promo={item.promo}
                                    limit={item.limit}
                                    title={item.title}
                                    desc={item.desc}
                                    price={item.price}
                                    key={index}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Promo;
