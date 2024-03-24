import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import type { GetArtistInfoParams, GetArtistListParams } from '@/types';

import queryOptions from './queries';

export function useArtistInfo({
  nickname,
  sortType,
  field,
}: GetArtistInfoParams) {
  const {
    data,
    fetchNextPage, // 다음 페이지를 호출하는 함수
    isFetchingNextPage, // 다음 페이지를 호출 중인지 = isLoading과 같은 개념
    // hasNextPage, // 다음 페이지를 가지고 있는지(마지막 페이지인지 판단 t/f)
    isLoading,
    isError,
  } = useInfiniteQuery(queryOptions.artistInfo({ nickname, sortType, field }));

  const artworks = useMemo(() => {
    return data?.pages.flatMap((page) => {
      if (Array.isArray(page.list)) {
        return page.list
          .filter((artwork) => !artwork.title.includes('마영택과 여름나기'))
          .map((artwork) => ({
            ...artwork,
            board: artwork.board.replace(/&#\d+;/g, '').trim(),
          }));
      } else {
        return [];
      }
    });
  }, [data]);

  return {
    artworks,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  };
}

// TODO: 위 api 네이밍과 아래 result type이 헷갈림. 수정필요
export function useArtistList({ q, ranktype, board }: GetArtistListParams) {
  const { data, fetchNextPage, isFetchingNextPage, isLoading, isError } =
    useInfiniteQuery(
      queryOptions.artistList({
        q,
        ranktype,
        board,
      })
    );

  const artists = useMemo(() => {
    return data?.pages.flatMap((page) => page.list);
  }, [data]);

  const total = data?.pages[0].total;
  return {
    artists,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    total,
  };
}
