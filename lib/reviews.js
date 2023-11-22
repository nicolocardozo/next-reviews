import { readdir, readFile } from "node:fs/promises";
import { marked } from "marked";
import matter from "gray-matter";

export async function getReview(slug) {
  const text = await readFile(`./content/reviews/${slug}.md`, "utf-8");
  const {
    content,
    data: { title, date, image },
  } = matter(text);
  const body = marked(content);

  return { title, date, image, body, slug };
}

export async function getReviews() {
  const slugs = await getSlugs();
  const reviews = [];

  for (const slug of slugs) {
    const review = await getReview(slug);
    reviews.push(review);
  }

  const reviewsSorted = reviews.sort((a, b) => b.date.localeCompare(a.date));

  return reviewsSorted;
}

export async function getFeaturedReviews() {
  const allReviews = await getReviews();

  return allReviews[0];
}

export async function getSlugs() {
  const files = await readdir("./content/reviews");
  const slugs = files.filter((file) => file.endsWith(".md")).map((file) => file.slice(0, -".md".length));

  return slugs;
}
