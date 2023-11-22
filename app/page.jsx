import Link from "next/link";
import Heading from "../components/Heading";
import { getFeaturedReviews } from "@/lib/reviews";

export default async function HomePage() {
  const { title, image, slug } = await getFeaturedReviews();

  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-5">Only the best indie games, reviewed for you.</p>
      <div className="border bg-white rounded-xl shadow hover:shadow-xl duration-300 w-80 sm:w-full">
        <Link href={`/reviews/${slug}`} className="flex flex-col sm:flex-row ">
          <img
            src={image}
            alt=""
            width="320"
            height="180"
            className="rounded-t-lg sm:rounded-l-lg sm:rounded-r-none "
          />
          <h2 className="py-2 text-center font-orbitron font-semibold">{title}</h2>
        </Link>
      </div>
    </>
  );
}
