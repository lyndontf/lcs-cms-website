import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getPublishedPosts } from '@/lib/supabase';
import { getCurrentSiteId } from '@/lib/site-context';
import ContentRenderer from '@/components/ContentRenderer';

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  // No site filtering at build time — all slugs are pre-generated
  const posts = await getPublishedPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const siteId = await getCurrentSiteId();
  const post = await getPostBySlug(slug, siteId || undefined);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.meta_title || post.title,
    description: post.meta_description || post.excerpt || undefined,
  };
}

export const revalidate = 60;

export default async function BlogPostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const siteId = await getCurrentSiteId();
  const post = await getPostBySlug(slug, siteId || undefined);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-primary">Blog</Link>
          <span>/</span>
          <span className="text-gray-700 font-medium truncate">{post.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-8">
          {post.category && (
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              {post.category}
            </span>
          )}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-2 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            {post.author_name && <span>By {post.author_name}</span>}
            {post.published_at && (
              <time dateTime={post.published_at}>
                {new Date(post.published_at).toLocaleDateString('en-MY', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            )}
          </div>
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-primary-50 text-primary px-3 py-1 rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Featured Image */}
        {post.featured_image_url && (
          <div className="mb-10 rounded-xl overflow-hidden">
            <img
              src={post.featured_image_url}
              alt={post.title}
              className="w-full h-auto"
            />
          </div>
        )}

        {/* Content */}
        <ContentRenderer blocks={post.content} />

        {/* Back to Blog */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/blog"
            className="text-primary font-semibold hover:text-primary-600 transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </div>
    </article>
  );
}
