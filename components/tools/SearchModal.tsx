import {
  Checkbox,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { FaSearch } from 'react-icons/fa';

import { darkMode, lightMode } from '@/styles/theme';

const SearchModal = ({ isOpen, onClose }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      const nickname = e.target.value; // 입력된 값
      window.location.href = `/artists/${nickname}`;
      onClose();
    }
  };

  // modal
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  // color
  const color = useColorModeValue(lightMode.color, darkMode.color);
  const color2 = useColorModeValue(lightMode.color2, darkMode.color2);

  const searchBgColor = useColorModeValue('#E1E1E1', '#303134');

  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay zIndex={150} />
      <ModalContent
        maxW={['100%', '56%', '70%']}
        // maxW={['100%', '66%']}
        mt={0}
        boxShadow="none"
        borderRadius="0.5rem"
        background={color2}
        p="0 0.5rem"
      >
        <ModalHeader
          display="flex"
          justifyContent="center"
          alignItems="center"
          pl={1}
          pr={1}
        >
          <InputGroup m="0 ">
            <InputLeftElement
              pointerEvents="none"
              display="flex"
              justifyContent="center"
              alignItems="center"
              // padding="0.5rem"
            >
              <FaSearch
                style={{
                  position: 'relative',
                  top: '0.1rem',
                  width: '1.2rem',
                  height: '1.2rem',
                  color,
                }}
              />
            </InputLeftElement>
            <Input
              placeholder="검색"
              h="2.5rem"
              borderRadius="3rem"
              border="none"
              bg={searchBgColor}
              alignItems="center"
              onKeyDown={handleKeyPress}
            />
          </InputGroup>
        </ModalHeader>
        <ModalBody
          pb={6}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Text>검색에 포함할 대상을 선택하세요.</Text>
          <Stack spacing={5} direction="row">
            <Checkbox defaultChecked>작품</Checkbox>
            <Checkbox defaultChecked>작가</Checkbox>
          </Stack>
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
