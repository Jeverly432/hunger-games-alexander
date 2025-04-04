const SITE_URL = process.env.NEXT_PUBLIC_DEFAULT_SITE_URL || "http://localhost:3000";

const SITE_NAME = 'DevOptima';

const DEFAULT_IMAGE_PATH = '';

export default function getMetadata({
  title,
  description,
  robotsNoindex,
  pathname,
  imagePath = DEFAULT_IMAGE_PATH,
  type = 'website',
} = {}) {
  const canonicalUrl = SITE_URL + pathname;
  const imageUrl = imagePath.startsWith('http') ? imagePath : SITE_URL + imagePath;
  const robots = robotsNoindex === 'noindex' ? { index: false } : null;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    metadataBase: new URL(SITE_URL),
    robots,
    openGraph: {
      title,
      description,
      siteName: SITE_NAME,
      url: canonicalUrl,
      images: [
        {
          url: imageUrl,
        },
      ],
      type,
    },
    twitter: {
      card: 'summary_large_image',
    },
  };
}
