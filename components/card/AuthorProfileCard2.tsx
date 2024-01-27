import {
  Avatar,
  Badge,
  Box,
  Button,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import React from 'react';

import SortTypeIcons from '@/components/artist/SortTypeIcons';
import ViewTypeIcons from '@/components/artist/ViewTypeIcons';
import { useResponsiveLink } from '@/hook/useResponsiveLink';
import { darkMode, lightMode } from '@/styles/theme';

interface AuthorProfileCardProps {
  author: any;
  // writerURL: string;
  // profURL: string;
  // nickname: string;
  uploadTimeDiff: string;
}

const AuthorProfileCard2: React.FC<AuthorProfileCardProps> = ({
  author,
  // writerURL,
  // profURL,
  // nickname,
  uploadTimeDiff,
}) => {
  const bg2 = useColorModeValue(lightMode.bg2, darkMode.bg2);
  const bg3 = useColorModeValue(lightMode.bg3, darkMode.bg3);
  const color = useColorModeValue(lightMode.color, darkMode.color);
  const color2 = useColorModeValue(lightMode.color2, darkMode.color2);
  const highlightColor = useColorModeValue(
    lightMode.highlight,
    darkMode.highlight
  );
  const highlightColor2 = useColorModeValue(
    lightMode.highlight2,
    darkMode.highlight2
  );

  const member_link = useResponsiveLink(
    author?.writerURL?.split('/').pop(),
    'member'
  );

  return (
    <NextLink
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
      href={`/artists/${author?.nickname}`}
    >
      <Button
        backgroundColor={bg2}
        _hover={{
          backgroundColor: bg3,
        }}
        as="a"
        target="_blank"
        borderRadius="lg"
        overflow="hidden"
        p="1rem"
        minW="240px"
        h={['200px', '140px', '140px']}
        display="flex"
        // flexDirection={['column', 'row', 'row']}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="1rem"
        w="100%"
      >
        <Box
          display="flex"
          flexDirection={['column', 'row', 'row']}
          justifyContent="center"
          alignItems="center"
          w="100%"
        >
          {author?.profURL === 'NULL' ? (
            <Avatar
              size="lg"
              name={author?.nickname}
              src={author?.profURL || ''}
            />
          ) : (
            <div
              style={{
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative',
                width: 96,
                height: 96,
              }}
            >
              <Image
                src={
                  author?.profURL ||
                  'https://ssl.pstatic.net/static/cafe/cafe_pc/default/cafe_profile_363.png'
                }
                alt={author?.nickname}
                fill={true}
                unoptimized
              />
            </div>
          )}
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="0.5rem"
          >
            <Text fontSize="lg" textAlign="center">
              {author?.nickname || '프로필은 왁물원에서'}
            </Text>
          </Box>
          <SortTypeIcons
            sortCriteria={null}
            // sortTypes={sortTypes}
            artist={author}
            component={'inNickname'}
          />
          <ViewTypeIcons
            sortCriteria={null}
            // viewTypes={viewTypes}
            selectedView={null}
            artist={author}
            component={'inNickname'}
            onSelectViewType={null}
          />
        </Box>
      </Button>
    </NextLink>
  );
};

export default AuthorProfileCard2;
