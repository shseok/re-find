import { Box, useBreakpointValue } from '@chakra-ui/react';
import React, { useState } from 'react';
import Masonry from 'react-masonry-css';

import MasonryCard from '@/components/cards/MasonryCard';
import { useResponsiveLink } from '@/hook/useResponsiveLink';

const MasonryView = ({
  nickname,
  artworks,
  isDeletedVisible,
  handleLoading,
}) => {
  const [focusedArtworkId, setFocusedArtworkId] = useState(null);

  const article_link = useResponsiveLink('', 'article');
  const widthValue = useBreakpointValue({ base: '180px', sm: '236px' });
  const widthValue2 = useBreakpointValue({ base: '188px', sm: '252px' });

  const breakpointColumnsObj = {
    default: 7,
    1792: 6,
    1528: 5,
    1260: 4,
    1008: 3,
    756: 2,
    300: 1,
  };

  // console.log(artworks);
  const handleToggleFocus = (id) => {
    if (id === focusedArtworkId) {
      setFocusedArtworkId(null); // Deselect the artwork if it's already focused
    } else {
      setFocusedArtworkId(id); // Set the focused artwork ID
    }
  };

  const [showButton, setShowButton] = useState(
    Array(artworks?.length).fill(false)
  ); // 각 이미지에 대한 버튼 표시 여부를 배열로 관리

  const [hoveredIndices, setHoveredIndices] = useState([]);
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndices((prev) => [...prev, index]);
  };

  const handleMouseLeave = (index) => {
    setHoveredIndices((prev) => prev.filter((i) => i !== index));
  };

  return (
    <Box w="100%" mx="auto" position="relative">
      <Box
        as={Masonry}
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
        display="flex"
        justifyContent="center"
        margin="0 -0.5rem"
        // marginLeft="-1rem"
        width="auto"
        sx={{
          '.my-masonry-grid_column': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0 0.5rem',
            // paddingLeft: '1rem',
            backgroundClip: 'padding-box',
            maxW: widthValue2,
          },
        }}
      >
        {isDeletedVisible &&
          artworks.map((artwork, index) => (
            <MasonryCard
              key={index}
              nickname={nickname}
              artwork={artwork}
              isFocused={artwork.id === focusedArtworkId}
              onToggleFocus={handleToggleFocus}
            />
          ))}
        {!isDeletedVisible &&
          artworks?.map((artwork, index) =>
            !artwork?.deleted ? (
              <MasonryCard
                key={index}
                nickname={nickname}
                artwork={artwork}
                isFocused={artwork?.id === focusedArtworkId}
                onToggleFocus={handleToggleFocus}
              />
            ) : null
          )}
      </Box>
    </Box>
  );
};

export default MasonryView;
