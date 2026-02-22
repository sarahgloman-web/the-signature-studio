import WorkWithMeClient from "@/components/WorkWithMeClient";

export const metadata = {
  title: "Work With Me — The Signature Studio | Brand Collaborations",
  description:
    "Partner with The Signature Studio for sponsored posts, social media content, UGC, affiliate campaigns, and brand ambassadorships.",
  openGraph: {
    title: "Work With Me — The Signature Studio",
    description:
      "Partner with The Signature Studio for sponsored posts, social media content, and brand collaborations.",
    type: "website",
  },
};

export default function WorkWithMePage() {
  return <WorkWithMeClient />;
}
