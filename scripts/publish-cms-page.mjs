// Pushes a single HTML file straight into a cms_pages row via the Supabase
// service role key, bypassing PostgREST RLS and avoiding round-tripping the
// full page HTML through an LLM context window for each of the Bloom-rebrand
// page migrations.
//
// Usage:
//   node scripts/publish-cms-page.mjs --slug dementia-care --site-slug centre \
//     --file /path/to/fragment.html --title "Dementia & Memory Care" [--status published]
//
// Requires SUPABASE_SERVICE_ROLE_KEY and NEXT_PUBLIC_SUPABASE_URL in the environment.

import fs from 'fs';
import { createClient } from '@supabase/supabase-js';

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith('--')) {
      const key = argv[i].slice(2);
      const value = argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[++i] : true;
      args[key] = value;
    }
  }
  return args;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const { slug, file } = args;
  const siteSlug = args['site-slug'] || 'centre';
  const status = args.status || 'published';
  const title = args.title;
  const metaTitle = args['meta-title'] || null;

  if (!slug || !file) {
    console.error('Usage: node publish-cms-page.mjs --slug <slug> --file <path> [--site-slug centre] [--title "..."] [--status published]');
    process.exit(1);
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) {
    console.error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in environment.');
    process.exit(1);
  }

  const html = fs.readFileSync(file, 'utf-8');
  const supabase = createClient(url, serviceKey);

  const { data: site, error: siteErr } = await supabase
    .from('cms_sites')
    .select('id')
    .eq('slug', siteSlug)
    .single();
  if (siteErr || !site) {
    console.error('Site lookup failed:', siteErr?.message || 'not found');
    process.exit(1);
  }

  const { data: existing } = await supabase
    .from('cms_pages')
    .select('id')
    .eq('slug', slug)
    .eq('site_id', site.id)
    .maybeSingle();

  const content = [{ type: 'html', content: html }];

  if (existing) {
    const { data, error } = await supabase
      .from('cms_pages')
      .update({ content, status, updated_at: new Date().toISOString() })
      .eq('id', existing.id)
      .select('id, slug')
      .single();
    if (error) {
      console.error('Update failed:', error.message);
      process.exit(1);
    }
    console.log(JSON.stringify({ ok: true, action: 'updated', id: data.id, slug: data.slug, content_len: html.length }));
  } else {
    if (!title) {
      console.error('New page (no existing row) — --title is required for insert.');
      process.exit(1);
    }
    const { data, error } = await supabase
      .from('cms_pages')
      .insert({ site_id: site.id, slug, title, meta_title: metaTitle, content, status })
      .select('id, slug')
      .single();
    if (error) {
      console.error('Insert failed:', error.message);
      process.exit(1);
    }
    console.log(JSON.stringify({ ok: true, action: 'inserted', id: data.id, slug: data.slug, content_len: html.length }));
  }
}

main().catch((e) => {
  console.error('Unexpected error:', e.message);
  process.exit(1);
});
