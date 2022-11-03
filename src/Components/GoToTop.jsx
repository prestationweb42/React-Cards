import React, { useEffect, useState } from "react";
import styled from "styled-components";

const GoToTop = () => {
    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };
    //
    const [isVisible, setIsVisible] = useState(false);
    //
    const listenToScroll = () => {
        //
        let heightToHidden = 250;
        //
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
        //
        if (winScroll > heightToHidden) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    //
    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
    }, []);
    //
    return (
        <Wrapper>
            {isVisible && (
                <div className="top-btn" onClick={goToBtn}>
                    <i class="bx bx-chevron-up scrolltop__icon"></i>
                </div>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    .top-btn {
        font-size: 5rem;
        width: 6rem;
        height: 6rem;
        color: #000;
        background-color: #f1f1f1;
        border-radius: 50%;
        text-decoration: none;
        position: fixed;
        bottom: 6rem;
        right: 6rem;
        z-index: 999;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
`;

export default GoToTop;
