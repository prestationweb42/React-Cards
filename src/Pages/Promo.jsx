import React from "react";
import Navbar from "../Components/Navbar";
import Cards from "../Components/Cards";
import Data from "../Backend/Data";

const Promo = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid py-3">
                <h3 className="text-info text-center mt-3">
                    Nos promotions sur les arbres à chat
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
                    </div>
                </div>
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
                    </div>
                </div>
            </div>
        </>
    );
};

export default Promo;
