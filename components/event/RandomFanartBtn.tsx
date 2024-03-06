import type { SystemProps } from '@chakra-ui/react';
import {
  Box,
  Button,
  Flex,
  Link,
  Skeleton,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { isAxiosError } from 'axios';
import NextImage from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaArrowDown, FaDice } from 'react-icons/fa';

import { eventsData } from '@/data/events';
import { useModifiedImageUrl } from '@/hook/useModifiedImageUrl';
import { useResponsiveLink } from '@/hook/useResponsiveLink';
import { getUrlInfo } from '@/service/client/events';

type Props = {
  initialFanart: null;
  selectedEventKey: string;
};

export default function RandomFanartBtn({ selectedEventKey }: Props) {
  const [fanart, setFanart] = useState<EventFanart | null>(null);
  const [keywordUrl, setKeywordUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isvisible, setIsvisible] = useState(true);
  // const [isFocused, setIsFocused] = useState(false);
  // const [isBold, setIsBold] = useState(false);

  const direction = useBreakpointValue({
    base: 'column',
    md: 'row',
  }) as SystemProps['flexDirection'];

  const article_link = useResponsiveLink(
    fanart?.url.split('/').pop() ?? '',
    'article'
  );

  const modifiedUrl300 = useModifiedImageUrl(fanart?.img_url ?? '', 300);

  useEffect(() => {
    // console.log('selectedEventKey: ', selectedEventKey);

    const selectedEvent = eventsData.find(
      (event) => event.key === selectedEventKey
    );
    if (selectedEvent) {
      setKeywordUrl(selectedEvent.url);
    }

    fetchRandomFanart();
  }, [selectedEventKey]);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setIsBold((prevIsBold) => !prevIsBold);
  //   }, 1000); // Toggle bold every 1 second

  //   return () => clearInterval(intervalId); // Clear interval on component unmount
  // }, []);

  // useEffect(() => {
  //   if (initialFanart == null) fetchRandomFanart();
  //   setFanart(initialFanart);
  // }, []);

  // const fetchRandomFanart = useCallback(async () => {
  //   if (!keywordUrl) {
  //     console.log('keywordUrl is null');
  //     return;
  //   }
  //   try {
  //     setIsLoading(true);
  //     const res = await axios.get(keywordUrl);
  //     setFanart(res.data);
  //   } catch (error) {
  //     if (error.response && error.response.status === 500) {
  //       console.log('Server Error: ', error.response.status);
  //     } else if (error.code === 'ERR_NETWORK') {
  //       console.log('Network Error: ', error.code);
  //     } else {
  //       console.log(error);
  //     }
  //   }
  // }, [keywordUrl, setIsLoading, setFanart]);

  const fetchRandomFanart = async () => {
    if (!keywordUrl) {
      // console.log('keywordUrl is null');
      return;
    }
    try {
      setIsLoading(true);
      // console.log('keywordUrl: ', keywordUrl);
      const result = await getUrlInfo(keywordUrl);
      setFanart(result);
    } catch (error) {
      if (!isAxiosError(error)) return;
      if (error.response && error.response.status === 500) {
        console.log('Server Error: ', error.response.status);
      } else if (error.code === 'ERR_NETWORK') {
        console.log('Network Error: ', error.code);
      } else {
        console.log(error);
      }
    }
  };

  // const handleLoad = async () => {
  //   // await new Promise((r) => setTimeout(r, 1000));
  //   await new Promise((resolve, _) => {
  //     setTimeout(() => {
  //       setIsLoading(false);
  //       resolve();
  //     }, 100);
  //   });
  //   setIsLoading(false);
  // };
  const handleLoad = () => {
    (async () => {
      await new Promise((resolve, _) => {
        setTimeout(() => {
          setIsLoading(false);
          resolve(undefined);
        }, 100);
      });
      setIsLoading(false);
    })();
  };

  const showRandomFanart = () => {
    // if (!isvisible) setIsvisible(true);
    fetchRandomFanart();
  };

  const previewContainer: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  };
  const img: React.CSSProperties = {
    display: 'flex',
    height: '100%',
    maxHeight: '400px',
    borderRadius: '1rem',
    objectFit: 'cover',
    width: '100%',
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
    marginBottom: '0.5rem',
  };

  const linkDiv: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  };

  const guide: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
    alignItems: 'center',
    height: '100px',
  };

  return (
    <Box p="0.5rem" w="100%" borderRadius="lg">
      <div style={previewContainer} className="random-fanart">
        {!isvisible && (
          <div className="random-fanart__guide" style={guide}>
            <Flex
              direction={direction}
              alignItems="center"
              justifyContent="center"
              wrap="wrap"
            >
              <Text
                fontSize="xl"
                fontWeight="bold"
                mb={direction === 'row' ? '1rem' : '0'}
                mr={direction === 'row' ? '0.3rem' : '0'}
              >
                아래 버튼을 누르면
              </Text>
              <Text
                fontSize="xl"
                fontWeight="bold"
                mb="1rem"
                mr={direction === 'row' ? '1rem' : '0'}
              >
                랜덤 팬아트가 나와요!
              </Text>
            </Flex>
            <FaArrowDown />
          </div>
        )}
        {isvisible && (
          <Box>
            <Skeleton isLoaded={!isLoading}>
              {fanart && (
                <>
                  <Box
                    position="relative"
                    borderRadius="1rem"
                    overflow="hidden"
                    w="100%"
                    pt="2rem"
                  >
                    <Link
                      className="link-to-wakzoo"
                      href={article_link}
                      // passHref
                      isExternal
                      style={{
                        ...linkDiv,
                        position: 'relative',
                      }}
                    >
                      <NextImage
                        unoptimized
                        style={img}
                        width={475}
                        height={475}
                        src={modifiedUrl300}
                        alt={`랜덤 팬아트 게시글 id: ${fanart?.title}`}
                        onLoad={handleLoad}
                      />
                      <Box
                        position="absolute"
                        top={0}
                        right={0}
                        bottom={0}
                        left={0}
                        borderRadius="1rem"
                        zIndex={1}
                        _hover={{
                          backgroundColor: 'rgba(0, 0, 0, 0.3)',
                          cursor: 'pointer',
                        }}
                        pointerEvents="none" // 이 줄을 추가합니다.
                      ></Box>{' '}
                    </Link>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    mb="1rem"
                  >
                    <Box
                      as="a"
                      href={`/artists/${fanart?.nickname}`}
                      // passHref
                      style={linkDiv}
                    >
                      <Text>
                        {/* color="#1B1642" */}
                        제목: {fanart?.title.slice(0, 20)}
                      </Text>
                      <Text>작가: {fanart?.nickname}</Text>
                    </Box>
                  </Box>
                </>
              )}
            </Skeleton>
          </Box>
        )}
        <Flex gap="2">
          <Button
            className="random-fanart-kidding"
            colorScheme="yellow"
            size="md"
            mt="1rem"
            p="0 3rem"
            borderRadius="4rem"
            onClick={showRandomFanart}
          >
            <FaDice
              style={{
                width: '20px',
                height: '20px',
              }}
            />
            &nbsp; 랜덤가챠 굴리기
          </Button>
        </Flex>
      </div>
    </Box>
  );
}
