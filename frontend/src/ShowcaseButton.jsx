import screen_play from "./assets/screen_play.png"

export default function ShowcaseButton({ setShowcaseVisible, setShowcaseContent, contentId }) {
    function openShowcase() {
        setShowcaseVisible(true);
        setShowcaseContent(contentId)
    }

    return (
        <button 
            className="showcase-button"
            onClick={ () => openShowcase() }
        >
            <img src={screen_play} />
            Showcase
        </button>
    )
}