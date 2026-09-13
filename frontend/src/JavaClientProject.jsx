import DropDown from "./DropDown"
import Label from "./Label"
import client_code_1 from "./assets/client_code_1.png"
import client_code_2 from "./assets/client_code_2.png"
import ShowcaseButton from "./ShowcaseButton"



export default function JavaClientProject({ setShowcaseVisible, setShowcaseContent }) {
    return (
        <div className="projects-page">
            <div className="project">
                <div className="section">
                    <h3 className="purple">Case Study</h3>
                    <h1>Java Game Mod</h1>
                    <p>EXECUTIVE SUMMARY</p>

                    <div className="card">
                        <p>
                            <strong>SYSTEM OVERVIEW</strong>
                        </p>

                        <p>
                            <strong>Problem: </strong>
                            The vanilla client for Minecraft lacks customisation, particularly in the render sector
                        </p>

                        <p>
                            <strong>Solution: </strong>
                            Reverse engineered the source code to implement my own features using Java & Kotlin
                        </p>

                    </div>

                    <p>KEY FEATURES</p>

                    <div className="card">
                        <p>
                            <strong>ARCHITECTUAL</strong>
                        </p>

                        <p>
                            <strong>Render System: </strong>
                            Advanced 2D/3D rendering system using OpenGL allows for custom vertex & shader attachment. 
                        </p>

                        <p>
                            <strong>Module & Config System: </strong>
                            Settings are saved locally on your machine using JSON to stop config from being reset each launch.
                        </p>
                    </div>

                    <div className="card">
                        <p>
                            <strong>APPLICATION</strong>
                        </p>

                        <p>
                            <strong>No Render: </strong>
                            Allows the user to disable rendering features that reduce performance; increasing FPS significantly. 
                        </p>

                        <p>
                            <strong>Custom Renders: </strong>
                            Allows user to customise various aspects of renders, including colour, scale, shape & opacity
                        </p>

                        <p>
                            <strong>Automatic Inventory Sorting: </strong>
                            The user can automatically sort items between containers and their inventory to save time and effort on tedious manual sorting.
                        </p>

                        <p>
                            <strong>Interactable GUI </strong>
                            Allows the user to configure the client with simple clicks of buttons.
                        </p>
                    </div>

                    <p>CONCEPTS AND COMPETENCIES</p>

                    <div className="label-wrapper">
                        <Label text="Java"/>
                        <Label text="Kotlin"/>
                        <Label text="Event Driven Programming"/>
                        <Label text="IPC/API Integration"/>
                        <Label text="OpenGL"/>
                        <Label text="Bytecode Manipulation"/>
                        <Label text="Mixins"/>
                    </div>

                    <div className="label-wrapper">
                        <ShowcaseButton setShowcaseVisible={setShowcaseVisible} setShowcaseContent={setShowcaseContent} contentId={1}/>    
                    </div>
                    
                </div>

                <div className="section">
                    <h3 className="blue">Deep Dive</h3>
                    <h1>Engineering & Challenges</h1>

                    <p>CHALLENGES AND MITIGATIONS</p>

                    <DropDown text="Packet Manipulation (Auto Inventory Sort)" content={
                        <div>
                            <p>
                                <strong>Challenge: </strong>
                                Minecraft's interaction manager does not send raw packets to the server.
                                This can cause several issues, such as client/server desync or false anti cheat detection
                            </p>

                            <p>
                                <strong>Mitigation: </strong>
                                Reverse engineer the packet system to directly send packets without other data.
                            </p>

                            <img src={client_code_1} />
                        </div>
                    }/>

                    <DropDown text="3D Render Translation" content={
                        <div>
                            <p>
                                <strong>Challenge: </strong>
                                Camera vectors need to be taken into account when rendering in 3D
                            </p>

                            <p>
                                <strong>Mitigation: </strong>
                                Subtract the render position from the camera vector to correctly align the render
                            </p>

                            <img src={client_code_2} />
                        </div>    
                    } expandedDefault={true}/>
                </div>
            </div>
        </div>
    )
}