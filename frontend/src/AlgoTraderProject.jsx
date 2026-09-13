import Label from "./Label.jsx"
import Dropdown from "./DropDown.jsx"
import RepositoryButton from "./RepositoryButton.jsx"
import event_code_1 from "./assets/event_code_1.png"
import event_code_2 from "./assets/event_code_2.png"
import event_code_3 from "./assets/event_code_3.png"
import event_code_4 from "./assets/event_code_4.png"
import ShowcaseButton from "./ShowcaseButton.jsx"

export default function AlgoTraderProject({ setShowcaseVisible, setShowcaseContent }) {

    return (
        <div className="projects-page">
            <div className="project">
                <div className="section">
                    <h3 className="purple">Case Study</h3>
                    <h1>Algorithmic Trader</h1>

                    <p>EXECUTIVE SUMMARY</p>

                    <div className="card">
                        <p><strong>SYSTEM OVERVIEW</strong></p>
                        
                        <p>
                            <strong>Problem: </strong> 
                            Manual trading can cause emotional bias and missed opportunities
                        </p>

                        <p>
                            <strong>Solution: </strong>
                            A reliable tool that utilises a combination of London session breakout and a Fair Value Gap to detect a signal
                        </p>
                    </div>

                    <p>KEY FEATURES</p>

                    <div className="card">
                        <p><strong>ARCHITECTUAL</strong></p>
                        
                        <p>
                            <strong>Custom Event Bus: </strong>
                            Handles events through a highly efficient and expandable system.
                            The event handler runs on it's own thread, reducing latency in other processes. 
                        </p>

                        <p>
                            <strong>Module System: </strong>
                            Each individual stock chosen to run can contain it's own strategies and code off a base class to avoid code duplication.
                        </p>
                    </div>

                    <div className="card">
                        <p><strong>APPLICATION</strong></p>

                        <p>
                            <strong>Fully Automated: </strong>
                            All decisions are made in real time without need of human intervention. 
                        </p>

                        <p>
                            <strong>Discord Integration: </strong>
                            Integrated Discord bot allows for control of the program through commands on any device.
                            Live logs are also sent by the discord bot, allowing the user to recieve updates on the process while on the go. 
                        </p>
                    </div>

                    <p>CONCEPTS & COMPETENCIES</p>

                    <div className="label-wrapper">
                        <Label text="Python"/>
                        <Label text="Event Driven Programming"/>
                        <Label text="Multi Threading"/>
                        <Label text="IPC/API Integration"/>
                        <Label text="Pandas/Numpy"/>
                    </div>

                    <div className="label-wrapper">
                        <RepositoryButton url="https://github.com/James62-f/algorithmic-trader"/>
                        <ShowcaseButton setShowcaseVisible={setShowcaseVisible} setShowcaseContent={setShowcaseContent} contentId={0}/>
                    </div>
                    
                </div>

                <div className="section">
                    <h3 className="blue">Deep Dive</h3>
                    <h1>Engineering & Challenges</h1>

                    <p>CHALLENGES AND MITIGATIONS</p>

                    <Dropdown text="Event System" content={
                        <div>
                            <p>
                                <strong>Challenge: </strong>
                                Large projects with numerous moving parts can cause code and logic to become tangled and illegible
                            </p>

                            <p>
                                <strong>Solution: </strong>
                                Design an event system allowing access to external loops without externally calling functions
                            </p>

                            <img src={event_code_3}/>
                            <img src={event_code_1} />
                            
                            <p>The event can be called anywhere externally</p>
                            <img src={event_code_4} />
                        </div>
                    }/>

                    <Dropdown text="DISCORD BOT LATENCY" content={
                        <div>
                            <p>
                                <strong>Challenge: </strong>
                                The discord bot would temporarily cause execution latency on each message sent
                            </p>

                            <p>
                                <strong>Mitigation: </strong>
                                Implemented a threading system to handle Discord bot and trading logic separately
                            </p>

                            <img src={event_code_2} />
                        </div>
                    } expandedDefault={true} />
                </div>
            </div>
        </div>
    )
}