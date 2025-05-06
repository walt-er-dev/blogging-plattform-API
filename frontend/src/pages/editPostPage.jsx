export function EditPostPage({ title, content }) {
  return (
    <div className="edit-post">
      <h2>Edit Post</h2>
      <form action="">
        <input type="text" value={title} />
        <textarea content={content} rows="10"></textarea>
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
