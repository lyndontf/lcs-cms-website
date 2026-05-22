import { Metadata } from 'next';
import GalleryClient from '../../our-gallery/GalleryClient';

export const metadata: Metadata = {
  title: '我们的图库 - Genesis Life Care护理之家的照片',
  description:
    '查看Genesis Life Care护理之家设施、康复服务、用餐和跨越Petaling Jaya、Klang、Kajang、Puchong和Johor Bahru的中心的照片。',
  openGraph: {
    title: '我们的图库 - Genesis Life Care',
    description:
      '查看我们的护理之家设施、护理服务和马来西亚各中心的照片。',
    images: [
      {
        url: '/images/services/common-area-scenic.jpg',
        width: 1200,
        height: 630,
        alt: 'Genesis Life Care设施',
      },
    ],
  },
};

export const revalidate = 60;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'Genesis Life Care照片库',
  description:
    'Genesis Life Care护理之家设施、护理服务和马来西亚各中心的照片。',
  url: 'https://genesiscare.com.my/zh/our-gallery',
  provider: {
    '@type': 'Organization',
    name: 'Genesis Life Care',
    url: 'https://genesiscare.com.my',
  },
};

export default function GalleryPageZh() {
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
