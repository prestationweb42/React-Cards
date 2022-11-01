import React from "react";
import Navbar from "../Components/Navbar";
import Cards from "../Components/Cards";
import Promotions from "../Backend/Promotions";

const Promo = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid py-3">
                <h3 className="text-success text-center mt-3">
                    Nos promotions sur les arbres à chat
                </h3>
                <div className="container">
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
            </div>
        </>
    );
};

export default Promo;
