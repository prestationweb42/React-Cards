import React from "react";
import Navbar from "../Components/Navbar";
import Cards from "../Components/Cards";
import Data from "../Backend/Data";
import "../Styles/Home.css";

const Promo = () => {
    return (
        <>
        <Navbar />
            <div>
                <div className="container-fluid py-3">
                    <h3 className="text-info text-center mt-3">
                        Promotions sur les arbres à chat
                    </h3>
                    <div className="container">
                        <div className="row">
                            {Data.products.map((item, index) => {
                                return (
                                    <Cards
                                        img={item.img}
                                        title={item.title}
                                        desc={item.desc}
                                        price={item.price}
                                        key={index}
                                    />
                                );
                            })}
                            {/* <Cards img="" title="" desc="" /> */}
                        </div>
                    </div>
                    <div className="container mt-3">
                        <div className="row">
                            {Data.products.map((item, index) => {
                                return (
                                    <Cards
                                        img={item.img}
                                        title={item.title}
                                        desc={item.desc}
                                        price={item.price}
                                        key={index}
                                    />
                                );
                            })}
                            {/* <Cards img="" title="" desc="" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Promo;
