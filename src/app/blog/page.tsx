import { Metadata } from 'next';
import { getCurrentSiteBaseUrl } from '@/lib/site-context';
import { BlogContent } from '@/components/pages/Blog';

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = await getCurrentSiteBaseUrl();
  return {
    title: 'Blog',
    description: 'News and updates from Genesis Life Care',
    alternates: {
      canonical: `${baseUrl}/blog`,
    },
  };
}

export const revalidate = 60;

export default function BlogPage() {
  return <BlogContent locale="en" />;
}
