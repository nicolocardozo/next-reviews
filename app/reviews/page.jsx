import Link from "next/link";
import Heading from "@/components/Heading";
import { getReviews } from "@/lib/reviews";

export const metadata = {
  title: "Reviews",
};

export default async function ReviewsPage() {
  const reviews = await getReviews();

  return (
    <>
      <Heading>Reviews</Heading>

      <ul className="flex flex-row flex-wrap gap-3">
        {reviews.map((review) => (
          <li key={review.slug} className="w-80 border bg-white rounded-xl shadow hover:shadow-xl duration-300">
            <Link href={`/reviews/${review.slug}`}>
              <img src={review.image} alt="" width="320" height="180" className="rounded-t-lg" />
              <h2 className="py-2 text-center font-orbitron font-semibold">{review.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
