import github from "./assets/github.png"

export default function RepositoryButton({ url }) {
    function redirect() {
        window.open(url, '_blank').focus();
    }

    return (
        <button 
            className="repository-button"
            onClick={() => redirect()}
        >
            <img src={github} />
            VIEW REPOSITORY
        </button>
    )
}