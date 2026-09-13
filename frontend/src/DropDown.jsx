import React from "react"

export default function DropDown({ text="", content, expandedDefault=false }) {
    const [expanded, setExpanded] = React.useState(expandedDefault)

    function expand() {
        setExpanded(!expanded)
    }

    return (
        <div className="dropdown">
            <div className="dropdown-top" onClick={ () => expand() }>
                <p><strong>{text}</strong></p>

                <button className="dropdown-button" onClick={ () => expand() }>{expanded ? "⮟" : "⮝"}</button>
            </div>

            <div className={`dropdown-content ${expanded ? "expanded" : ""}`}>
                {content}
            </div>
        </div>
    )
}