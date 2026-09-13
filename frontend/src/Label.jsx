import React from "react"

export default function Label(text="", background="#1C1C26", color="#F8FAFC", border="#2E2E3F") {

    return (
        <div className="label" style={{
            backgroundColor: background,
            color: color,
            border: `1px solid ${border}`
        }}>
            <p>{text.text}</p>
        </div>
    )
}