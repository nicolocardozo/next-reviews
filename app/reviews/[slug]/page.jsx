import Heading from "@/components/Heading";
import ShareLinkButton from "@/components/ShareLinkButton";
import { getReview, getSlugs } from "@/lib/reviews";

export async function getStaticParams() {
  const slugs = await getSlugs();

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }) {
  const { title } = await getReview(slug);

  return {
    title: title,
  };
}

export default async function ReviewPage({ params: { slug } }) {
  const { title, date, image, body } = await getReview(slug);

  return (
    <>
      <Heading>{title}</Heading>
      <div className="flex gap-3 items-baseline mb-2">
        <p className="pb-2 italic">{date}</p>
        <ShareLinkButton />
      </div>

      <img src={image} alt="" width="640" height="360" className="rounded-xl mb-4" />
      <article dangerouslySetInnerHTML={{ __html: body }} className="prose prose-slate max-w-screen-sm"></article>
    </>
  );
}
