'use client';

import { useTranslations } from 'next-intl';
import Layout from '@/components/Layout';

// Note that `app/[locale]/[...rest]/page.tsx`
// is necessary for this page to render.

export default function NotFoundPage() {
  //const t = useTranslations('main.NotFoundPage');

  return (
    <Layout>
      <p className="max-w-[460px]">{/*t('description')*/}</p>
    </Layout>
  );
}