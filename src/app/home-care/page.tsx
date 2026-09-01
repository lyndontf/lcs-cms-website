import { Metadata } from 'next';
import { generateCmsMetadata, CmsHtmlPage } from '@/lib/cms-html-page';

const SLUG = 'home-care';

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  return generateCmsMetadata(SLUG);
}

export default function Page() {
  return <CmsHtmlPage slug={SLUG} />;
}
