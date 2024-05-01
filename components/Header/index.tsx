'use client';

import clsx from 'clsx';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

import SearchModalOpener from '@/app/search/components/Modal/SearchModalOpener';
import BackButton from '@/components/Button/BackButton';
import DesktopHeaderTab from '@/components/Header/DesktopHeaderTab';
import DesktopMenuTab from '@/components/Header/DesktopMenuTab';
import { useScroll } from '@/hooks/useScroll';
import { Logo } from '@/lib/images';

const Modals = dynamic(() => import('@/components/Modal/Modals'), {
  ssr: false,
});

export default function Header() {
  const pathname = usePathname();
  const isGalleryPage = pathname.includes('/gallery');
  const isScrolling = useScroll(60);
  const { resolvedTheme } = useTheme();
  const isWhiteMode = resolvedTheme === 'light';
  const isNotScrollingGalleryPage = isGalleryPage && !isScrolling;
  const isWhiteModeWithNotGalleryPage = isWhiteMode && !isGalleryPage;

  return (
    <header
      className={clsx(
        'flex h-[60px] w-full items-center justify-between px-4 transition', // fixed top-0 z-[200]
        {
          'bg-white dark:bg-dark-card': !isNotScrollingGalleryPage,
          'bg-blackAlpha-500': isNotScrollingGalleryPage,
          'backdrop-blur': isNotScrollingGalleryPage,
          'border-b border-gray-150': isWhiteModeWithNotGalleryPage,
        }
      )}
    >
      <HeaderContent />
      <Modals />
    </header>
  );
}

const HeaderContent = () => {
  const pathname = usePathname();
  const isMorePath = pathname.startsWith('/more');
  const isSearchPage = pathname.startsWith('/search');
  const moreMap = {
    '/more/notice': '공지사항',
    '/more/support': '문의',
    '/more/about': '소개',
    '/more': '좀 더!',
  } as const;

  if (isMorePath) {
    return (
      <>
        <BackButton />
        <h1 className="flex items-center justify-center text-xl font-bold">
          {moreMap[pathname as keyof typeof moreMap] ?? '좀 더!'}
        </h1>
        <div className="size-12" />
      </>
    );
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="mr-2 size-11 rounded-full p-2 transition hover:bg-gray-200 dark:hover:bg-whiteAlpha-300 md:mr-4">
          <Link href="/">
            <Image
              alt="리파인드 로고"
              width={32}
              height={32}
              src={Logo}
              priority
            />
          </Link>
        </div>
        <DesktopHeaderTab />
      </div>
      {!isSearchPage && <SearchModalOpener />}
      <DesktopMenuTab />
    </>
  );
};
