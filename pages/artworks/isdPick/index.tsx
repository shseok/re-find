import { Box, Text, useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import HashLoader from 'react-spinners/HashLoader';

import MemberButtonList from '@/components/artwork/MemberButtonList';
import PageTitle from '@/components/common/PageTitle';
import ViewSelectBar from '@/components/common/ViewSelectBar';
import SearchLayout from '@/components/layout/search-layout';
import MasonryView from '@/components/views/MasonryView';
import SimpleView from '@/components/views/SimpleView';
import gallary from '@/data/gallary';
import members from '@/data/members';

export default function Album() {
  const toast = useToast();
  const router = useRouter();

  // infinite scroll
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '800px 0px', // 상단에서 800px 떨어진 지점에서 데이터를 불러옵니다. 이 값을 조정하여 원하는 위치에서 데이터를 불러올 수 있습니다.
  });

  const [total, setTotal] = useState(0);
  const [artworks, setArtworks] = useState(null);
  const [visibleArtworks, setVisibleArtworks] = useState(null);
  const [page, setPage] = useState(1);

  const [selected, setSelected] = useState('isd');
  const [album, setAlbum] = useState(gallary[0]);
  const [member, setMember] = useState(null);
  const [isLastPage, setIsLastPage] = useState(false); // useState(artist_artworks_data?.lastPage);

  // 뷰 선택 메뉴
  const [activeView, setActiveView] = useState('masonryView'); // 초기 뷰 설정
  const [sortType, setSortType] = useState('latest'); // 초기 상태 설정
  const [isDeletedVisible, setIsDeletedVisible] = useState(false);
  const [isInitialRender, setIsInitialRender] = useState(true);

  // react-spinners
  const [loadingData, setLoadingData] = useState(false);
  const [loadingImage, setLoadingImage] = useState(true);

  // 정렬 선택하기
  const handleMenuItemClick = useCallback((menuText: string) => {
    // if (menuText === sortType) return;
    setSortType(menuText);
    // 다시 불러오기
    // setPage(1);
    // setIsLastPage(false);
    // setArtworks([]);
  }, []);

  // 뷰 선택하기
  const handleViewChange = useCallback((view: string) => {
    setActiveView(view);
  }, []);

  // 삭제된 게시글 보이기
  const handleShowDeleted = useCallback(() => {
    setIsDeletedVisible((prev) => !prev);
  }, []);

  // 이미지 로딩
  const handleLoading = useCallback((Loading) => {
    setLoadingImage(Loading);
  }, []);

  const getFanartAlbum = useCallback(async () => {
    console.log('getFanartAlbum');
    if (isLastPage) return;
    if (loadingData) return;

    setLoadingData(true);

    try {
      const url = `https://re-find.reruru.com/isd_notice`;
      const response = await axios.get(url).then((res) => res.data);
      console.log(response); //
      setTotal(response?.total);
      setArtworks([...response.list]);
    } catch (error) {
      // 500에러 예외처리
      console.log(error.response);
      if (error.response?.status === 500) {
        toast({
          title:
            '현재 작가 프로필 쪽 서버가 점검중 입니다. 잠시 후 다시 시도해주세요.',
          description: '500 error',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
      console.error('Error fetching more data:', error);
      setIsLastPage(true);
    } finally {
      setLoadingData(false); // Set loading state to false regardless of success or failure
    }
  }, []);

  return (
    <SearchLayout title="팬아트 갤러리">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        m=" 3rem"
      >
        <PageTitle topTitle={album} />
        <MemberButtonList
          members={members}
          type="sort"
          range={{ start: 1, end: 8 }}
          selected={selected}
          setSelected={setSelected}
        />
        <Text>총 {total}</Text>

        <ViewSelectBar
          activeView={activeView}
          onViewChange={handleViewChange}
          selectedMenu={sortType}
          onMenuItemClick={handleMenuItemClick}
          isDeletedVisible={isDeletedVisible}
          handleShowDeleted={handleShowDeleted}
          usingPage={'artist'}
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        margin="0 auto"
        mb="2rem"
      >
        {(!artworks || loadingData) && (
          <Box
            w="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <HashLoader color="#01BFA2" />
          </Box>
        )}
        {artworks && (
          <>
            {artworks?.length !== 0 && (
              <Box
                w="100%"
                overflow="hidden" // 모바일 사파리에서 여백이 생기는 문제 해결
              >
                {activeView === 'masonryView' && (
                  <MasonryView
                    nickname={''}
                    artworks={artworks}
                    isDeletedVisible={isDeletedVisible}
                    // loadingImage={loadingImage}
                    handleLoading={handleLoading}
                  />
                )}
                {activeView === 'gridView' && (
                  <SimpleView
                    artworks={artworks}
                    isDeletedVisible={isDeletedVisible}
                    // handleLoading={handleLoading}
                  />
                )}
                {/* Observer를 위한 div */}
                {<Box ref={ref} w="100%" h="2rem"></Box>}
              </Box>
            )}
          </>
        )}
      </Box>
    </SearchLayout>
  );
}
