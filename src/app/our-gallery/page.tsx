import { Metadata } from 'next';
import GalleryClient from './GalleryClient';

export const metadata: Metadata = {
  title: 'Our Gallery - Photos of Genesis Life Care Nursing Homes',
  description:
    'View photos of Genesis Life Care nursing home facilities, rehabilitation services, dining, and centres across Petaling Jaya, Klang, Kajang, Puchong & Johor Bahru.',
  openGraph: {
    title: 'Our Gallery - Genesis Life Care',
    description:
      'View photos of our nursing home facilities, care services and centres across Malaysia.',
    images: [
      {
        url: '/images/services/common-area-scenic.jpg',
        width: 1200,
        height: 630,
        alt: 'Genesis Life Care facilities',
      },
    ],
  },
};

export const revalidate = 60;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'Genesis Life Care Photo Gallery',
  description:
    'Photos of Genesis Life Care nursing home facilities, care services and centres across Malaysia.',
  url: 'https://genesiscare.com.my/our-gallery',
  provider: {
    '@type': 'Organization',
    name: 'Genesis Life Care',
    url: 'https://genesiscare.com.my',
  },
};

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GalleryClient />
    </>
  );
}
