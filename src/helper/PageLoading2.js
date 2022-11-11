import React from 'react';
import { Box, Flex, Container } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/react';
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react';
import heroBg from '../components/assets/Herobg.png';

export default function PageLoading2() {
  return (
    <Flex
      justifyContent="center"
      bgGradient="linear(to-r, #181125, #25203a)"
      borderRadius="10"
      w={{ base: '100%', md: '100%', lg: '100%' }}
      padding={{ base: '5', md: '10', lg: '10' }}
      height="auto"
    >
      <Box
        padding="3"
        w="100%"
        boxShadow="lg"
        bgGradient="linear(to-r, #2d2d40, #eaeaeb)"
        borderRadius="10px"
      >
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
      </Box>
    </Flex>
  );
}
