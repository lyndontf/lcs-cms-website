import { Metadata } from 'next';
import { getPublishedPosts, getPageBySlug } from '@/lib/supabase';
import { getCurrentSiteId, getCurrentSiteSlug } from '@/lib/site-context';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'News and updates from Genesis Life Care',
};

export const revalidate = 60;

export default async function BlogPage() {
  const [siteId, siteSlug] = await Promise.all([getCurrentSiteId(), getCurrentSiteSlug()]);

  // For non-centre sites, serve CMS content from the database
  if (siteSlug !== 'centre') {
    const page = await getPageBySlug('blog', siteId || undefined);
    if (page?.content?.length === 1 && page.content[0].type === 'html') {
      return (
        <div
          className="cms-html-page"
          dangerouslySetInnerHTML={{ __html: page.content[0].content || '' }}
        />
      );
    }
  }

  const posts = await getPublishedPosts(siteId || undefined);

  // Get unique categories
  const categories = Array.from(new Set(posts.map((p) => p.category).filter(Boolean))) as string[];

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Blog</h1>
        <p className="text-lg text-gray-600 mb-8">News, insights, and updates</p>

        <BlogClient posts={posts} categories={categories} />
      </div>
    </div>
  );
}
