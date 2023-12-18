import { Box, Button, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { PiGiftBold } from 'react-icons/pi';

import { darkMode, lightMode } from '@/styles/theme';

const EventBtn = () => {
  const color3 = useColorModeValue(lightMode.color2, darkMode.color3);
  const bg2 = useColorModeValue(lightMode.bg2, darkMode.bg2);

  return (
    <Box
      w="100%"
      h="100%"
      p={['0.8rem 0', '1.5rem 0', '2.7rem 0']}
      maxW="700px"
      maxH="130px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      background={bg2}
      borderRadius="1rem"
      boxShadow="md"
    >
      <Button
        background="black"
        color="white"
        w="60%"
        h="40px"
        // mb="2rem"
        _hover={{ background: '#ddd', color: 'black' }}
      >
        {' '}
        <PiGiftBold
          style={{
            width: '1.5rem',
            height: '1.5rem',
          }}
        />
        <NextLink href="/events/">특집 팬아트 보러가기</NextLink>
      </Button>
    </Box>
  );
};

export default EventBtn;