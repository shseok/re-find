'use client';

import {
  Box,
  Button,
  Flex,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React, { useEffect, useRef } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';

import { useDrawerStore } from '@/store/drawerStore';
import { darkMode, lightMode } from '@/styles/theme';

export default function GalleryHeader({ title }) {
  const [isOpenDrawer, setIsOpenDrawer] = useDrawerStore((state) => [
    state.isOpen,
    state.setIsOpen,
  ]);

  const myDrawerRef = useRef<HTMLElement | null>(null);

  const bgColor2 = useColorModeValue(lightMode.bg2, darkMode.bg2);
  const color = useColorModeValue(lightMode.color, darkMode.color);

  // const boxShadowLight =
  //   '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)';
  // const boxShadowDark =
  //   '0px 4px 6px -1px rgba(255, 255, 255, 0.1), 0px 2px 4px -1px rgba(255, 255, 255, 0.06)'; // 다크 모드에서의 그림자

  useEffect(() => {
    if (!isOpenDrawer) {
      return;
    }
    const handleClick = (e) => {
      if (
        e.target.className === 'hamburger-react' ||
        e.target.closest('.hamburger-react')
      ) {
        return;
      }
      if (e.target.tagName.toLowerCase() === 'a') {
        console.log('a');
        return; // Return early if the clicked element is an <a> tag
      }
      if (myDrawerRef.current && !myDrawerRef.current.contains(e.target)) {
        // console.log("other");
        setIsOpenDrawer(false);
      }
    };
    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, [isOpenDrawer]);

  const toggleDrawer = () => {
    setIsOpenDrawer(!isOpenDrawer);
  };

  return (
    <Box
      position="sticky"
      pt="0"
      // top="60px
      top="0"
      w="100%"
      h="60px"
      zIndex="200"
    >
      <Flex
        as="header"
        style={{
          backgroundColor: bgColor2,
          color,
          padding: '0 1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box w="3rem" h="3rem">
          <Button
            w="3rem"
            h="3rem"
            p="0.5rem"
            variant="ghost"
            borderRadius="50%"
            flexShrink={0}
          >
            <NextLink href="/gallery">
              <FaArrowLeftLong style={{ width: '1.5rem', height: '1.5rem' }} />
            </NextLink>
          </Button>
          {/* <BackButton /> */}
        </Box>
        <Box w="16rem" h="3rem">
          <Heading
            as="h1"
            size="md"
            m="0"
            pt="0.75rem"
            noOfLines={1}
            color={color}
          >
            {title}
          </Heading>
        </Box>
        <Box w="3rem" h="3rem"></Box>
      </Flex>
    </Box>
  );
}
