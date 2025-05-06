import zod from "zod";

const postSchema = zod.object({
  title: zod
    .string("Title shold be a string")
    .min(1, "Title is required")
    .max(100, "Title must be less than 100 characters"),
  content: zod.string().min(1, "Content is required"),
  tags: zod.array(zod.string()).optional(),
});

export function validatePost(input) {
  return postSchema.safeParse(input);
}

export function validatePartialPost(input) {
  return postSchema.partial().safeParse(input);
}
