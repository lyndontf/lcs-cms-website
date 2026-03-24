'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import { ContentBlock } from '@/lib/supabase';

const JobListingsEmbed = dynamic(() => import('./JobListingsEmbed'), { ssr: false });

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, '');
}

export default function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  if (!blocks || blocks.length === 0) {
    return null;
  }

  return (
    <div className="prose prose-lg max-w-none">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'heading': {
            const Tag = `h${block.level || 2}` as keyof JSX.IntrinsicElements;
            const classes: Record<number, string> = {
              1: 'text-4xl font-extrabold text-gray-900 mb-6 mt-10',
              2: 'text-3xl font-bold text-gray-900 mb-4 mt-8',
              3: 'text-2xl font-bold text-gray-800 mb-3 mt-6',
              4: 'text-xl font-semibold text-gray-800 mb-2 mt-4',
              5: 'text-lg font-semibold text-gray-700 mb-2 mt-3',
              6: 'text-base font-semibold text-gray-700 mb-2 mt-3',
            };
            return (
              <Tag key={i} className={classes[block.level || 2] || classes[2]}>
                {block.content}
              </Tag>
            );
          }

          case 'paragraph':
            return (
              <p
                key={i}
                className="text-gray-700 leading-relaxed mb-4"
                dangerouslySetInnerHTML={{ __html: block.content || '' }}
              />
            );

          case 'image':
            return (
              <figure key={i} className="my-6">
                {block.src && (
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                    <Image
                      src={block.src}
                      alt={block.alt || ''}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                    />
                  </div>
                )}
                {block.caption && (
                  <figcaption className="text-center text-sm text-gray-500 mt-2">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );

          case 'list': {
            const ListTag = block.ordered ? 'ol' : 'ul';
            return (
              <ListTag
                key={i}
                className={`mb-4 pl-6 space-y-1 ${
                  block.ordered ? 'list-decimal' : 'list-disc'
                } text-gray-700`}
              >
                {(block.items || []).map((item, j) => (
                  <li
                    key={j}
                    className="leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                ))}
              </ListTag>
            );
          }

          case 'quote':
            return (
              <blockquote
                key={i}
                className="border-l-4 border-primary pl-4 py-2 my-6 italic text-gray-600 bg-primary-50/50 rounded-r-lg"
              >
                <p>{block.content}</p>
              </blockquote>
            );

          case 'cta':
            return (
              <div key={i} className="my-8 text-center">
                <a
                  href={block.url || '#'}
                  className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-primary-600 transition-colors shadow-md hover:shadow-lg"
                >
                  {block.label || block.content || 'Learn More'}
                </a>
              </div>
            );

          case 'divider':
            return <hr key={i} className="my-8 border-gray-200" />;

          case 'html':
            return (
              <div
                key={i}
                className="my-4"
                dangerouslySetInnerHTML={{ __html: block.content || '' }}
              />
            );

          case 'job_listings':
            return <JobListingsEmbed key={i} />;

          default:
            return null;
        }
      })}
    </div>
  );
}
