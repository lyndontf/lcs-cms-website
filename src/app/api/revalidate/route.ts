import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const secret = request.headers.get('x-revalidation-secret');
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ error: 'Invalid secret' }, { status: 401 });
  }

  try {
    const { slug, type } = await request.json();

    if (type === 'page') {
      if (slug === 'home') {
        revalidatePath('/');
      } else {
        revalidatePath(`/${slug}`);
      }
    } else if (type === 'post') {
      revalidatePath(`/blog/${slug}`);
      revalidatePath('/blog');
    }

    // Always revalidate home page (it shows recent posts)
    revalidatePath('/');

    return NextResponse.json({ revalidated: true, slug, type });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to revalidate' }, { status: 500 });
  }
}
