import React from "react";
import "../Styles/Cards.css";

const Cards = (props) => {
    return (
        <>
            <div className="col-sm-12 col-md-6 col-xl-4 col-xxl-3 mt-1">
                <div className="card h-100">
                    <img
                        src={props.img}
                        alt=""
                        className="card-img-top img-fluid"
                    />
                    <p className="promo">{props.promo}</p>
                    <p className="datelimit">{props.limit}</p>
                    <div className="card-body">
                        <div className="d-flex justify-content-around">
                            <h4 className="card-title text-center">
                                {props.title}
                            </h4>
                            <h4 className="card-text fs-2rem text-center fw-bolder">
                                {props.price} $
                            </h4>
                        </div>
                        <p className="card-text text-center">{props.desc}</p>
                        <p className="card-text text-center">{props.desc}</p>
                        <p className="card-text text-center">{props.desc}</p>

                        <button className="btn btn-outline-success mt-3 p-2">
                            Ajouter au panier
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cards;
