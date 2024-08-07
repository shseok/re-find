'use client';

import { useSearchParams } from 'next/navigation';
import { ClimbingBoxLoader } from 'react-spinners';
import { useShallow } from 'zustand/react/shallow';

import { useSearchFilterStore } from '@/app/search/store/searchFilerStore';

export default function Loading() {
  const searchParams = useSearchParams();
  const viewType = searchParams.get('viewType') ?? 'list';
  const { isShow } = useSearchFilterStore(
    useShallow((state) => ({
      isShow: state.isFetching,
    }))
  );

  if (viewType === 'gallery') return null;
  return (
    isShow && (
      <div className="fixed left-1/2 top-1/2 z-[299] -translate-x-1/2 -translate-y-1/2">
        <ClimbingBoxLoader color="#01BFA2" />
      </div>
    )
  );
}
