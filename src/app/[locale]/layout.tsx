// next
import type { Metadata } from 'next';

// next-intl
import { NextIntlClientProvider } from 'next-intl';

// clsx
import clsx from 'clsx';

// tailwind styles
import '@/styles/globals.css';

// fonts
import { bizudMincho, bitter } from '@/ui/fonts';

// metadata
export const metadata: Metadata = {
  title: 'Sushi Ghar by Hasan tariq',
  description: 'Pakistani Sushi Restaurant Website by  Hasan tariq',
  keywords: [
    'sushi',
    'restaurant',
    'Pakistani ',
    'Pakistani  restaurant',
    'sushi restaurant',
    'Hasan tariq',
  ],
  icons: { icon: '/images/favicon.png' },
  metadataBase: new URL('https://sushi-restaurant.rashidshamloo.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ja_JP',
    url: '/',
    title: 'Sushi Doshira by Hasan tariq',
    siteName: 'Sushi Doshira by Hasan tariq',
    description: 'Pakistani  Sushi Restaurant Website by Hasan tariq',
    images: {
      url: '/images/screenshots/home.webp',
      alt: 'Sushi Doshira by Hasan tariq',
      width: 1200,
      height: 654,
      type: 'image/webp',
      secureUrl: '/images/screenshots/home.webp',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sushi Doshira by Rashid Shamloo',
    description: 'Pakistani  Sushi Restaurant Website by Rashid Shamloo',
    images: '/images/screenshots/home.webp',
    creator: '@rashidshamloo',
    site: '@rashidshamloo',
  },
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ja' }];
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {}
  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={clsx(
          'bg-bgGray text-white',
          locale === 'ja' ? bizudMincho.className : bitter.className,
        )}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
