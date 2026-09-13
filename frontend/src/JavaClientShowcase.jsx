import React from "react";
import client_1 from "./assets/client_1.png";
import client_2 from "./assets/client_2.png";
import client_3 from "./assets/client_3.png";

export default function JavaClientShowcase({ setShowcaseVisible }) {
    const [slide, setSlide] = React.useState(1);

    const slides = {
        1: <img src={client_1} />,
        2: <img src={client_3} />,
        3: <img src={client_2} />
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