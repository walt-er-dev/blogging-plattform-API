import "./App.css";
import { Header } from "../components/Header.jsx";
import { Post } from "../components/Post.jsx";

function App() {
  return (
    <>
      <Header />
      <section className="posts">
        <Post
          title="First post"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa modi, eligendi fugit magni a totam. At voluptates sapiente, consequatur nesciunt libero odit reiciendis est harum! In numquam quisquam facere? Quam."
        />
        <Post
          title="Second post"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa modi, eligendi fugit magni a totam. At voluptates sapiente, consequatur nesciunt libero odit reiciendis est harum! In numquam quisquam facere? Quam."
        />
        <Post
          title="Third post"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa modi, eligendi fugit magni a totam. At voluptates sapiente, consequatur nesciunt libero odit reiciendis est harum! In numquam quisquam facere? Quam."
        />
      </section>
    </>
  );
}

export default App;
