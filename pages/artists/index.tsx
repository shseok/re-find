import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import axios from 'axios';
import NextImage from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { use, useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import HashLoader from 'react-spinners/HashLoader';

import { darkMode, lightMode } from '@/styles/theme';

interface User {
  total_cnt: number;
  best_cnt: number;
  goldhand_cnt: number;
  isd_cnt: number;
  gomem_cnt: number;
  wak_cnt: number;
  prof_url: string;
  total_views: number;
  total_likes: number;
  total_comments: number;
}

const sortTypes = [
  { name: '총 작품', value: 'total_cnt' },
  { name: '총 조회', value: 'total_views' },
  { name: '총 댓글', value: 'total_comments' },
  { name: '총 좋아요', value: 'total_likes' },
];

const viewTypes = [
  // { name: '전체', value: 'all' },
  { name: '금손 작가', value: 'goldhand_cnt' },
  { name: '베스트', value: 'best_cnt' },
  { name: '우왁굳', value: 'wak_cnt' },
  { name: '고멤/교멤', value: 'gomem_cnt' },
  { name: '이세돌', value: 'isd_cnt' }, // 추천
];

const Artists = ({ artists_list }) => {
  const router = useRouter();
  const { ref, inView } = useInView({
    // infinite scroll을 위한 옵저버
    threshold: 0,
    rootMargin: '800px 0px', // 상단에서 800px 떨어진 지점에서 데이터를 불러옵니다. 이 값을 조정하여 원하는 위치에서 데이터를 불러올 수 있습니다.
  });

  const [artists, setArtists] = useState([]);
  const [nickname, setNickname] = useState('');
  const [page, setPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);

  const [selectedView, setSelectedView] = useState(null);
  // const [selectedViews, setSelectedViews] = useState({});
  const [sortCriteria, setSortCriteria] = useState({
    field: 'total_likes',
    order: 'descending', // 'ascending' 또는 'descending'
  });

  const bg = useColorModeValue(lightMode.bg, darkMode.bg);
  const bg2 = useColorModeValue(lightMode.bg2, darkMode.bg2);
  const bg3 = useColorModeValue(lightMode.bg3, darkMode.bg3);
  const color = useColorModeValue(lightMode.color, darkMode.color);
  const highlight = useColorModeValue(lightMode.highlight, darkMode.badge);

  const sortArtists = (_artists, { field, order }) => {
    return _artists.sort((a, b) => {
      if (order === 'ascending') {
        return a[field] - b[field];
      }
      return b[field] - a[field];
    });
  };

  const handleViewSelect = (value) => {
    setSelectedView((prevValue) => (prevValue === value ? null : value));
  };
  // const handleViewSelect = (value) => {
  //   setSelectedViews((prevViews) => ({
  //     ...prevViews,
  //     [value]: !prevViews[value],
  //   }));

  //   console.log(selectedViews);
  // };
  const handleChangeSortCriteria = (field) => {
    setSortCriteria((prevState) => {
      if (prevState.field === field) {
        return {
          ...prevState,
          order: prevState.order === 'ascending' ? 'descending' : 'ascending',
        };
      }
      return { ...prevState, field, order: 'ascending' };
    });
    console.log(sortCriteria);
  };

  const handleSearch = (e) => {
    console.log(e.target.value);
    setNickname(e.target.value);
  };

  useEffect(() => {
    const dataArray = Object.entries(artists_list).map(([key, value]) => {
      return { name: key, ...(value as User) };
    });

    console.log(dataArray);
    setArtists(dataArray);
  }, []);

  // 무한 스크롤
  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView) console.log('inView: ', inView);
    if (inView && !isLastPage) {
      // throttledGetArtistArtworks(); // 1초 동안 한 번만 요청을 보냅니다.
      setPage((prevState) => prevState + 1);
    }
  }, [inView, isLastPage]);
  return (
    <Box mt="10px" mb="10px" p="1rem" textAlign="center" w="100%">
      <Text as="h2" fontSize="3xl" fontWeight="bold">
        왁타버스 작가
      </Text>
      <Text fontSize="md">
        왁물원에서 활동중인 작가님의 작품을 모아서 볼 수 있어요.
      </Text>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt="2rem"
        w="100%"
      >
        <InputGroup
          display="flex"
          alignItems="center"
          justifyContent="center"
          maxW="400px"
        >
          <Input
            placeholder="왁물원 아이디"
            focusBorderColor="#01BFA2"
            size="md"
            value={nickname}
            onChange={handleSearch}
            // onKeyDown={handleKeyPress}
            backgroundColor={bg3}
            borderRadius="2rem"
            _hover={{
              backgroundColor: bg,
              borderColor: '#01BFA2',
            }}
            _focus={{ backgroundColor: bg }}
          />
          <InputRightElement pointerEvents="none" mr="1rem">
            <FaSearch
              style={{
                color: '#5C5F6B',
                position: 'relative',
                top: '0.1rem',
                width: '1.2rem',
                height: '1.2rem',
              }}
            />
          </InputRightElement>
        </InputGroup>
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
            flexWrap: 'wrap',
            margin: '1rem 0',
          }}
        >
          {sortTypes.map((sortType, index) => (
            <li key={index}>
              <Button
                size="md"
                onClick={() => handleChangeSortCriteria(sortType.value)}
                backgroundColor={
                  sortCriteria.field === sortType.value ? highlight : bg3
                }
                _hover={{
                  backgroundColor:
                    sortCriteria.field === sortType.value ? highlight : bg3,
                }}
              >
                {sortType.name}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 -960 960 960"
                  style={{
                    transform:
                      sortCriteria.field === sortType.value &&
                      sortCriteria.order === 'descending'
                        ? 'rotate(180deg)'
                        : 'rotate(0deg)',
                    transition: 'transform 0.1s ease-in-out',
                  }}
                >
                  <path d="M480-360 280-560h400L480-360Z" fill={color}></path>
                </svg>
              </Button>
            </li>
          ))}
        </ul>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mb="1rem"
          p="1rem"
          w="100%"
          // h="126px"
          backgroundColor={bg2}
          borderRadius="1rem"
        >
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'row',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            {viewTypes.map((viewType, index) => (
              <li key={index}>
                <Button
                  size="md"
                  // onClick={() => handleViewSelect(viewType.value)}
                  // colorScheme={selectedViews[viewType.value] ? 'blue' : 'gray'}
                  onClick={() => handleViewSelect(viewType.value)}
                  colorScheme={
                    selectedView === viewType.value ? 'blue' : 'gray'
                  }
                >
                  {viewType.name}
                </Button>
              </li>
            ))}
          </ul>
        </Box>
        <Box mb="1rem">
          <Text>{artists.length}명의 작가님들이 있어요.</Text>{' '}
        </Box>
        <Box
          mt="1rem"
          w="100%"
          m="0 auto"
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
          backgroundColor={bg2}
          borderRadius="1rem"
        >
          {artists.slice(0, 30).map(
            (artist, index) =>
              artist !== '' && (
                <Link
                  key={index}
                  href={`/artists/${artist.name}`}
                  passHref
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Button
                    backgroundColor={bg2}
                    _hover={{
                      backgroundColor: bg3,
                    }}
                    key={index}
                    w="100%"
                    m="0 1rem"
                    mt="1rem"
                    h="126px"
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                    borderRadius="1rem"
                  >
                    <Box
                      display="flex"
                      flexDirection="row"
                      alignItems="center"
                      gap="2rem"
                    >
                      <NextImage
                        unoptimized
                        width={100}
                        height={100}
                        style={{
                          borderRadius: '50%',
                          objectFit: 'cover',
                          width: '6rem',
                          height: '6rem',
                          marginRight: '1rem',
                        }}
                        src={artist.prof_url}
                        alt={artist.name}
                      />
                      <Text fontSize="lg" fontWeight="bold">
                        {artist.name}
                      </Text>
                    </Box>
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      justifyContent="space-between"
                      gap="0.5rem"
                    >
                      <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="flex-start"
                      >
                        {sortTypes.map((sortType, index2) => (
                          <Button
                            key={index2}
                            colorScheme="pink"
                            variant="outline"
                            size="sm"
                            mr="0.5rem"
                            display="flex"
                            flexDirection="column"
                            h="3rem"
                          >
                            <Text fontSize="md">{sortType.name}</Text>
                            <Text fontSize="lg"> {artist[sortType.value]}</Text>
                          </Button>
                        ))}
                      </Box>
                      <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="flex-start"
                      >
                        {viewTypes.map((viewType, index3) => (
                          <Button
                            key={index3}
                            colorScheme="blue"
                            variant="outline"
                            size="sm"
                            mr="0.5rem"
                            display="flex"
                            flexDirection="column"
                            h="3rem"
                          >
                            <Text fontSize="md">{viewType.name}</Text>
                            <Text fontSize="lg"> {artist[viewType.value]}</Text>
                          </Button>
                        ))}
                      </Box>
                    </Box>
                  </Button>
                </Link>
              )
          )}
          {/* Observer를 위한 div */}
          {<Box ref={ref} w="100%" h="2rem"></Box>}
        </Box>
      </Box>
    </Box>
  );
};

export default Artists;

export async function getServerSideProps(context) {
  try {
    const artists_list = await axios
      .get(`http://re-find.reruru.com/author_list`)
      .then((res) => res.data);

    return {
      props: {
        artists_list,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    return {
      notFound: true, // Next.js에서 제공하는 notFound 속성을 사용하여 페이지를 404로 표시
    };
  }
}
