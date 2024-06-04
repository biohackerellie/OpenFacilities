import type { MetadataRoute } from 'next';

const baseURL =
  process.env.NEXT_PUBLIC_HOST || 'https://facilities.laurel.k12.mt.us';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseURL}`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseURL}/facilities`,
    },
    {
      url: `${baseURL}/calendar`,
    },
  ];
}
