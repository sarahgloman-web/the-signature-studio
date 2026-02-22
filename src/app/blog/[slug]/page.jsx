import { redirect } from "next/navigation";
import { getAllPostSlugs } from "@/lib/posts";

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPostRedirect({ params }) {
  const { slug } = await params;
  redirect(`/edit/${slug}`);
}
