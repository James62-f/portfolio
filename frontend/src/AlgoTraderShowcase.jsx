import React from "react";
import trade_1 from "./assets/trade_1.png";
import trade_2 from "./assets/trade_2.png";

export default function AlgoTraderShowcase({ setShowcaseVisible }) {
    const [slide, setSlide] = React.useState(1);

    const slides = {
        1: <img src={trade_1} />,
        2: <img src={trade_2} />
    }

    function shiftIndex(value) {
        console.log(slide + value)

        if (value > 0 && slide + value > Object.keys(slides).length) {
            return
        }

        if (value < 0 && slide + value <= 0) {
            return
        }

        setSlide(slide + value)
    }

    return (
        <div className="showcase">
            <button className="slide-button" style={{ left: "-2%" }} onClick={() => shiftIndex(-1)}>◀</button>
            <button className="slide-button" style={{ right: "-2%" }} onClick={() => shiftIndex(1)}>▶</button>

            {slides[slide]}
            <button className="close-showcase-button" onClick={() => setShowcaseVisible(false) }>✖</button>
        </div>
    )
}