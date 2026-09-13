import me from "./assets/me.png"
import cv from "./assets/James Pickering.pdf"

export default function HomePage() {

    return (
        <div className="home-page">
            <div className="section">
                <div className="card" style={{ display: "flex", flexDirection: "row", minWidth: "40vw" }}>
                    <img src={me} />

                    <div className="title-wrapper">
                        <h1>James Pickering</h1>
                        <h2 className="blue">Junior Software Engineer</h2>
                    </div>

                </div>

                <div className="card" style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                    <div>
                        <p>
                            <strong>EMAIL: </strong>
                            PickeringJames62@gmail.com
                        </p>
                        <p>
                            <strong>PHONE NUMBER: </strong>
                            07516760047
                        </p>
                    </div>

                    <div>
                        <p>
                            <strong>CV: </strong>
                            <a href={cv} download>James Pickering.pdf</a>
                        </p>

                        <p>
                            <strong>GITHUB: </strong>
                            <a href="https://github.com/James62-f">James62-f</a>
                        </p>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <h3 className="purple" style={{ marginBottom: 0, marginTop: 0 }}>Experience</h3>

                        <p>
                            <strong>1.5+ years work experience </strong>
                            at the University of Exeter (PROTECT Dementia Research) contributing to both backend and frontend systems
                        </p>

                        <h3 className="blue" style={{ marginBottom: 0 }}>Projects & Details</h3>

                        <ul>
                            <li><span>Python automated CSV to JSON data conversion script for new database</span></li>
                            <li><span>React JS, HTML/CSS website to promote the company</span></li>
                            <li><span>C# Windows Application for live DNA Sample Tracking</span></li>
                            <li><span>Java/Kotlin tool to scan barcode and apply to database</span></li>
                            <li><span>C# bug fix caused by chrome extension</span></li>
                            <li><span>JavaScript & Cypress automated testing scripts</span></li>
                        </ul>

                        <p style={{ marginTop: "40px" }}>
                            <strong>Reviewed Exceptionally </strong>
                            by the team
                        </p>
                    </div>
                </div>
            </div>

            <div className="section">

                <div className="card">
                    <div>
                        <h3 className="purple" style={{ marginBottom: 0, marginTop: 0 }}>Summary</h3>
                        <p>
                            <strong>Junior Software Engineer </strong>
                            with 1.5+ years of professional full stack development experience.
                            I am seeking a degree apprenticeship to combine academic study and my existing skills in a practical environment.
                            Willing to relocate.
                        </p>
                    </div>

                    <div>
                        <h3 className="blue" style={{ marginBottom: 0 }}>Skills</h3>

                        <p>
                            <strong>Versatile: </strong>
                        </p>
                        <ul>
                            <li><span>Strong in both backend and frontend practices</span></li>
                            <li><span>Event driven development</span></li>
                            <li><span>Object Orientated Programming</span></li>
                            <li><span>Multithreading & System Performance</span></li>
                        </ul>
                        <p>
                            <strong>Engineering: </strong>
                        </p>
                        <ul>
                            <li><span>Debugging</span></li>
                            <li><span>Automation</span></li>
                            <li><span>Version Control</span></li>
                            <li><span>Database Integration</span></li>
                            <li><span>Documentation</span></li>
                            <li><span>Logging</span></li>
                        </ul>

                        <p>
                            <strong>Programming Languages: </strong>
                        </p>
                        <ul>
                            <li><span>Java/Kotlin</span></li>
                            <li><span>Python</span></li>
                            <li><span>C#</span></li>
                            <li><span>React, JavaScript, HTML/CSS</span></li>
                        </ul>
                        <p>
                            <strong>Software/Tools: </strong>
                        </p>
                        <ul>
                            <li><span>JetBrains, Microsoft Visual Studio, Microsoft Visual Studio Code</span></li>
                            <li><span>Microsoft Teams, Microsoft Word, Microsoft Excel</span></li>
                            <li><span>Git</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}