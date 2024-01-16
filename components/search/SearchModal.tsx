import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import SearchBar2 from '@/components/search/SearchBar2';
import SearchOptions from '@/components/search/SearchOptions';
import { darkMode, lightMode } from '@/styles/theme';

const SearchModal = ({ isOpen, onClose }) => {
  const router = useRouter();

  // modal
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  // color
  const color7 = useColorModeValue(lightMode.color, darkMode.color7);
  const bg2 = useColorModeValue(lightMode.bg2, darkMode.bg2);

  const searchBgColor = useColorModeValue('#E1E1E1', '#303134');

  useEffect(() => {
    if (router.pathname === '/search') {
      onClose();
    }
  }, [router.pathname, onClose]);

  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay zIndex={150} />
      <ModalContent
        maxW={['100%', '80%', '70%']}
        // maxW={['100%', '66%']}
        mt={0}
        boxShadow="none"
        border={`1px solid ${color7}`}
        borderRadius="1rem"
        background={bg2}
        p="0 0.5rem"
      >
        <ModalHeader
          display="flex"
          justifyContent="center"
          alignItems="center"
          pl={1}
          pr={1}
        >
          <SearchBar2 isSearchPage={false} />
        </ModalHeader>
        <ModalBody
          pb={6}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          {/* <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            mb="1rem"
            gap="0.5rem"
          >
            <Text>검색에 포함할 대상을 선택하세요.</Text>
            <Stack spacing={5} direction="row">
              <Checkbox defaultChecked>작품</Checkbox>
              <Checkbox defaultChecked>작가</Checkbox>
            </Stack>
          </Box> */}
          <SearchOptions />
        </ModalBody>
        <ModalFooter
          display="flex"
          justifyContent="center"
          alignItems="flex-start"
        >
          현재 작가닉네임 검색만 가능합니다!
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SearchModal;