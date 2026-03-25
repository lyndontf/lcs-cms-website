'use client';

import { useState } from 'react';

const CENTRES = [
  { name: 'Klang', wa: '60123210457' },
  { name: 'Petaling Jaya', wa: '60192950457' },
  { name: 'Kajang', wa: '60193340457' },
  { name: 'Puchong', wa: '60197590457' },
  { name: 'Johor Bahru', wa: '60192820457' },
];

export default function WhatsAppFab() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Centre picker popover */}
      {open && (
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-64 mb-1">
          <div className="bg-[#25D366] px-4 py-3">
            <p className="text-white text-sm font-bold">Chat with us on WhatsApp</p>
            <p className="text-white/80 text-xs">Select your nearest centre</p>
          </div>
          <div className="py-1">
            {CENTRES.map((c) => (
              <a
                key={c.name}
                href={`https://wa.me/${c.wa}?text=${encodeURIComponent('Hi, I would like to enquire about your elderly care services.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2.5 hover:bg-green-50 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-sm font-semibold text-gray-900">{c.name}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* FAB — WhatsApp icon shape (no circle bg) */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Chat on WhatsApp"
        className="group relative hover:scale-110 transition-transform drop-shadow-lg hover:drop-shadow-xl"
      >
        {open ? (
          <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        ) : (
          <svg className="w-[60px] h-[60px]" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* White outer ring / periphery */}
            <path
              d="M30 0C13.432 0 0 12.88 0 28.78c0 5.48 1.58 10.58 4.3 14.92L.42 58.66a1.2 1.2 0 001.46 1.5l15.2-3.88A29.6 29.6 0 0030 59.56c16.568 0 30-12.88 30-28.78S46.568 0 30 0z"
              fill="#fff"
            />
            {/* Green speech-bubble fill */}
            <path
              d="M30 4C15.64 4 4 15.16 4 29.08c0 4.78 1.38 9.22 3.78 13.02L4.1 55.1l13.48-3.44A26.4 26.4 0 0030 54.16c14.36 0 26-11.16 26-25.08S44.36 4 30 4z"
              fill="#25D366"
            />
            {/* White phone handset */}
            <path
              d="M42.34 35.276c-.594-.298-3.516-1.734-4.06-1.934-.546-.198-.942-.296-1.34.3-.394.594-1.534 1.932-1.88 2.328-.346.398-.694.446-1.288.15-.594-.3-2.51-.926-4.78-2.95-1.766-1.576-2.96-3.522-3.306-4.118-.346-.594-.036-.916.26-1.212.268-.266.596-.694.892-1.04.298-.348.396-.596.596-.994.198-.396.1-.742-.05-1.04-.15-.298-1.338-3.224-1.832-4.414-.484-1.158-.974-1-.34-1.02-.346-.016-.742-.02-1.14-.02-.396 0-1.04.148-1.584.744-.544.594-2.08 2.032-2.08 4.958 0 2.924 2.13 5.75 2.426 6.148.298.396 4.192 6.4 10.154 8.974 1.418.612 2.524.978 3.388 1.25 1.424.454 2.72.39 3.742.236 1.142-.17 3.516-1.438 4.012-2.826.496-1.388.496-2.578.346-2.826-.148-.248-.544-.396-1.14-.694z"
              fill="#fff"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
