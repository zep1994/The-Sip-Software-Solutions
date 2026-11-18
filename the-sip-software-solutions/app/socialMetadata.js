const image = {
  url: "/social-card.png",
  width: 1200,
  height: 630,
  alt: "The Sip Web Studio",
};

export function socialMetadata({ path, title, description }) {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: "The Sip Web Studio",
      title,
      description,
      url: path,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/social-card.png"],
    },
  };
}
