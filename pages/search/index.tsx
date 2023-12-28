import { Box, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import SearchLayout from '@/components/layout/search-layout';
import TotalSearchResult from '@/components/search/TotalSearchResult';
import members from '@/data/members';
import { useStore } from '@/store/store';
import { darkMode, lightMode } from '@/styles/theme';

const Search = () => {
  const setIsOpen = useStore((state) => state.setIsOpen);

  const router = useRouter();
  const [nickname, setNickname] = useState('');
  const [query, setQuery] = useState('');

  const bg = useColorModeValue(lightMode.bg, darkMode.bg);
  const bg2 = useColorModeValue(lightMode.bg2, darkMode.bg2);
  const bg3 = useColorModeValue(lightMode.bg3, darkMode.bg3);
  const color = useColorModeValue(lightMode.color, darkMode.color);
  const highlight = useColorModeValue(lightMode.highlight, darkMode.badge);

  const [sliderValue, setSliderValue] = useState([10, 30]);
  const [showTooltip, setShowTooltip] = useState([false, false]);

  // useEffect(() => {
  //   alert('준비중입니다!');
  // }, []);

  const handleSearch = () => {
    if (query) {
      // router.push(`/artists/${query}`);
    }
    // alert('준비중입니다!');
  };
  const handleKeyPress2 = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearchNickname = () => {
    if (nickname) {
      router.push(`/artists/${nickname}`);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearchNickname();
    }
  };

  useEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <Box mb="10px" p="1rem" textAlign="center" w="100%">
      <TotalSearchResult />
      {/* <Box
        m="0 auto"
        maxW="1024px"
        w="100%"
        background={bg2}
        p="1rem"
        mb="1rem"
        borderRadius="1rem"
        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.25)"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap="1rem"
          mb="4rem"
        >
          <Text as="h1" size="2xl">
            검색
          </Text>
          <Input
            placeholder="작가 닉네임, 작품 제목, 키워드 "
            maxW="400px"
            size="md"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <Button colorScheme="blue" size="md" onClick={handleSearchNickname}>
            Search
          </Button>
          <SearchOptions />
        </Box>
      </Box> */}

      {/* <Box
        m="0 auto"
        mt="3rem"
        w="94%"
        mb="2rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <SimpleGrid
          w={['100%', '90%']}
          minChildWidth={['150px', '200px']} // 모바일에서는 150px, 그 외에서는 200px
          spacing={['0.5rem', '0.75rem']}
          justifyContent="center"
          alignItems="center"
          placeItems="center"
          m="0 auto"
        >
          {data
            .slice()
            .reverse()
            .map((item, index) => (
              <NextLink
                key={index}
                href={`/artworks/${encodeURIComponent(item.key)}`}
              >
                <Box
                  key={index}
                  p="1rem"
                  m={['0', '0.5rem']}
                  mb=" 1rem"
                  w={['158px', '200px']}
                  h={['158px', '200px']}
                  display="flex"
                  flexDirection="column"
                  justifyContent="flex-start"
                  alignItems="center"
                  background={bg2}
                  borderRadius="1rem"
                  boxShadow="md"
                >
                  <Text fontSize="xl" fontWeight="bold" textAlign="left">
                    {item.title}
                  </Text>
                </Box>
              </NextLink>
            ))}
        </SimpleGrid>
      </Box> */}
    </Box>
  );
};

export default Search;
