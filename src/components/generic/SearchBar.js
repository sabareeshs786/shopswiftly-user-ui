import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchBar(){
    return (
        <div className="search-bar">
            <form>
                <div className="input-group">
                    <input
                        className="form-control me-0 custom-input"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <div className="input-group-append">
                        <button className="btn my-button" type="submit">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}