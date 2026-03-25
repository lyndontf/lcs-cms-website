import React from 'react';
import Link from 'next/link';

interface LatestNewsSectionProps {
  posts: any[];
}

export default function LatestNewsSection({ posts }: LatestNewsSectionProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-[.14em] uppercase text-primary mb-3">Resources</span>
          <h2 className="text-3xl font-bold text-gray-900">Latest News &amp; Guides</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.slice(0, 3).map((post: any) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all overflow-hidden group"
            >
              {post.featured_image_url && (
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  <img
                    src={post.featured_image_url}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-5">
                {post.category && (
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">
                    {post.category}
                  </span>
                )}
                <h3 className="text-base font-bold text-gray-900 mt-1 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
                )}
                <p className="text-xs text-gray-400 mt-3">
                  {post.published_at
                    ? new Date(post.published_at).toLocaleDateString('en-MY', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })
                    : ''}
                </p>
              </div>
            </Link>
          ))}
        </div>
        {posts.length > 3 && (
          <div className="text-center mt-8">
            <Link href="/blog" className="text-primary font-bold hover:text-primary-600 transition-colors">
              View All Posts →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
