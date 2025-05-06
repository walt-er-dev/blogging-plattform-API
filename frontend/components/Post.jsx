import deleteIcon from "../assets/delete.svg";
import editIcon from "../assets/edit.svg";
import "./Post.css";

export function Post({ title, content }) {
  return (
    <div className="post">
      <h2>{title}</h2>
      <span>Hace mas de 1 anno</span>
      <p>{content}</p>
      <div className="post-btns">
        <button className="edit-btn">
          <img src={editIcon} alt="editIcon" />
        </button>
        <button className="delete-btn">
          <img src={deleteIcon} alt="deleteIcon" />
        </button>
      </div>
    </div>
  );
}
