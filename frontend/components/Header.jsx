import "./header.css";
import searchIcon from "../assets/search.svg";
import addIcon from "../assets/add-fill.svg";
import { Link } from "react-router";

export function Header() {
  return (
    <header>
      <h1>Blogging-Plattform-API</h1>
      <div className="header-actions">
        <div className="header-search">
          <img src={searchIcon} alt="search" />
          <input type="text" placeholder="Search posts..." />
        </div>
        {
          <Link to={"/new"} className="header-link">
            <button className="header-add">
              <img src={addIcon} className="search-icon" alt="add" />
              New Post
            </button>
          </Link>
        }
      </div>
    </header>
  );
}
