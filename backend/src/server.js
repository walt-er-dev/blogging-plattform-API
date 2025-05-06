import express from "express";
import cors from "cors";
import posts from "./data/post.json" with { type: "json" };
import { validatePost, validatePartialPost } from "./schema/post.js";

const app = express();
app.disable("x-powered-by");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", (req, res) => {
  console.log("Request received:", req.method, req.url, req.body);
});

app.post("/", (req, res) => {
  const result = validatePost(req.body);

  if (!result.success) {
    return res.status(400).json({ error: result.error.message });
  }

  const newPost = {
    id: randomUUID(),
    ...result.data,
  };

  posts.push(newPost);
  res.status(201).json(newPost);
});

app.patch("/:id", (req, res) => {
  const result = validatePartialPost(req.body);

  if (!result.success) {
    return res.status(400).json({ error: result.error.message });
  }

  const postIndex = posts.findIndex((post) => post.id === req.params.id);

  if (postIndex === -1) {
    return false;
  }

  posts[postIndex] = {
    ...posts[postIndex],
    ...req.body,
  };

  return posts[postIndex];
});

app.delete("/:id", (req, res) => {
  const postIndex = posts.findIndex((post) => post.id === req.params.id);
  
  if (postIndex === -1) {
    return res.status(404).json({ error: "Post not found" });
  }

  posts.splice(postIndex, 1);
  res.status(204).json({ message: "Post deleted" });
});

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port https://localhost:${PORT}`);
});
