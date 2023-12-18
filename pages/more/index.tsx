import {
  Box,
  Button,
  Flex,
  Link,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React, { useEffect } from 'react';
import { AiFillExperiment } from 'react-icons/ai';
import { MdInfoOutline, MdOutlineContactSupport } from 'react-icons/md';
import { PiGiftBold } from 'react-icons/pi';

import MoreLayout from '@/components/layout/more-layout';
import DarkModeToggle from '@/components/tools/DarkModeToggle';
import UpdateLogBoard from '@/components/tools/UpdateLogBoard';
import { useStore } from '@/store/store';
import { darkMode, lightMode } from '@/styles/theme';

const More = () => {
  const setIsOpen = useStore((state) => state.setIsOpen);
  const { toggleColorMode } = useColorMode();

  const highlightColor = useColorModeValue(
    lightMode.highlight,
    darkMode.highlight
  );
  const bg = useColorModeValue(lightMode.bg2, darkMode.bg2);

  const handleButtonClick = () => {
    toggleColorMode(); // 다크 모드 전환
  };

  useEffect(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <MoreLayout title="좀 더!">
      <Flex
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        gap="1rem"
        flexWrap="wrap"
        mt="1rem"
        mb="1rem"
      >
        <NextLink href={'/more/about'} passHref>
          <Button
            variant="solid"
            w="9rem"
            h="8rem"
            p="1rem"
            mb="1rem"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            gap="1rem"
            borderRadius="1rem"
            background={bg}
          >
            <Box p="0.5rem">
              <MdInfoOutline
                style={{
                  width: '2rem',
                  height: '2rem',
                }}
              />
            </Box>

            <Text fontSize="xl">리파인드 소개</Text>
          </Button>
        </NextLink>
        <NextLink href={'/more/support'} passHref>
          <Button
            variant="solid"
            w="9rem"
            h="8rem"
            p="1rem"
            mb="1rem"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            gap="1rem"
            borderRadius="1rem"
            background={bg}
          >
            <Box p="0.5rem">
              <MdOutlineContactSupport
                style={{ width: '2rem', height: '2rem' }}
              />
            </Box>
            <Text fontSize="xl">문의,지원</Text>
          </Button>
        </NextLink>
        <NextLink href={'/events'} passHref>
          <Button
            variant="solid"
            w="9rem"
            h="8rem"
            p="1rem"
            mb="1rem"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            gap="1rem"
            borderRadius="1rem"
            background={bg}
          >
            <Box p="0.5rem">
              <PiGiftBold style={{ width: '2rem', height: '2rem' }} />
            </Box>
            <Text fontSize="xl">이벤트</Text>
          </Button>
        </NextLink>
        <Button
          variant="solid"
          w="9rem"
          h="8rem"
          p="1rem"
          mb="1rem"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          gap="1rem"
          borderRadius="1rem"
          background={bg}
          onClick={handleButtonClick}
        >
          <DarkModeToggle />
          <Text fontSize="xl">화면 스타일</Text>
        </Button>
      </Flex>
      <Link href="https://cafe.naver.com/steamindiegame/9524252" isExternal>
        <Button colorScheme="purple">
          <AiFillExperiment
            className="icon"
            style={{
              width: '20px',
              height: '20px',
              padding: '0',
              marginRight: '0.5rem',
            }}
          />
          (beta)이세돌 팬아트를 키워드로 찾아주는 AI
        </Button>
      </Link>
      <UpdateLogBoard width={'100%'} />
    </MoreLayout>
  );
};

export default More;
