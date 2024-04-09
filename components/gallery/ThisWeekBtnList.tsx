'use client';

import {
  background,
  Box,
  Button,
  Text,
  useColorMode,
  useColorModeValue,
  useTheme,
} from '@chakra-ui/react';

import { darkMode, lightMode } from '@/styles/theme';

const btnList = ['전체', '이세돌', '고멤', '우왁굳', '금손 작가들의 방'];

type Props = {
  range: { start: number; end: number };
  selected: string | null;
  setSelected: ((value: string) => void) | null;
  isdPick: boolean;
};
export default function ThisWeekBtnList({
  range,
  selected,
  setSelected,
}: Props) {
  const color = useColorModeValue(lightMode.color, darkMode.color);
  // const highlight = useColorModeValue(lightMode.highlight, darkMode.highlight);
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';
  const highlight = isDarkMode ? 'white' : '#01bda1';
  const backgroundColor = isDarkMode ? '#ffffff57' : '#00000080';
  const hoverColor = isDarkMode ? '#ffffff3c' : '#000000b3';

  const onClick = (value: string) => {
    if (setSelected) {
      setSelected(value);
    }
  };

  return (
    <Box
      w="100%"
      padding="0 2rem"
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      maxW="680px"
      flexWrap="wrap"
      gap="0.5rem"
      as="ul"
      sx={{
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        '-ms-overflow-style': 'none',
        'scrollbar-width': 'none',
      }}
    >
      {btnList.slice(range.start, range.end).map((item, index) => (
        <Box key={index}>
          <Button
            h={['30px', '36px']}
            borderRadius="800px"
            // border={selected === item ? 'none' : `0.3px solid ${color}`}
            onClick={() => onClick(item)}
            // variant={selected === item ? 'solid' : 'outline'}
            variant="solid"
            bg={selected === item ? highlight : backgroundColor}
            color={selected === item ? 'black' : 'white'}
            _hover={{
              background: selected === item ? highlight : hoverColor,
            }}
            fontSize={['sm', 'md']}
            fontWeight="bold"
            textAlign="left"
            // color={color}
          >
            {item}
          </Button>
        </Box>
      ))}
    </Box>
  );
}