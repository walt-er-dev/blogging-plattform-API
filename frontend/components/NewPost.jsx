import { Link } from "react-router";
import "./newPost.css";

const handleSubmit = (e) => {
  fetch("http://localhost:3000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: e.target[0].value,
      content: e.target[1].value,
    }),
  });
};

export function NewPost() {
  return (
    <div className="new-post">
      <h2>New Post</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" />
        <textarea placeholder="Post content" rows="10"></textarea>
        <div className="btns">
          {
            <Link to="/" className="link">
              <button className="cancel-btn">Cancel</button>
            </Link>
          }
          <button className="submit-btn" type="submit">
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
}
