'use client';

import dynamic from 'next/dynamic';

const TikTokSection = dynamic(() => import('@/components/home/TikTokSection').then(mod => ({ default: mod.TikTokSection })), {
  ssr: false,
  loading: () => <div className="py-16 bg-white dark:bg-gray-900 min-h-[400px]" />,
});

export function TikTokSectionWrapper() {
  return <TikTokSection />;
}

