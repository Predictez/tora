import React from 'react';
import { Box, Flex, Container } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/react';
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react';
import heroBg from '../components/assets/Herobg.png';

export default function PageLoading() {
  return (
    <Container
      height="100vh"
      w="100%"
      maxWidth="100%"
      padding="0"
      margin="0"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        justifyContent="center"
        bgGradient="linear(to-r, #181125, #25203a)"
        borderRadius="10"
        w={{ base: '100%', md: '40%', lg: '40%' }}
        padding={{ base: '5', md: '20', lg: '20' }}
        height="auto"
      >
        <Box
          padding="6"
          w="100%"
          boxShadow="lg"
          bgGradient="linear(to-r, #2d2d40, #eaeaeb)"
          borderRadius="10px"
        >
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
      </Flex>
    </Container>
  );
}

const pageLoading2 = () => {
  return (
    <Box
      padding="6"
      w="100%"
      boxShadow="lg"
      bgGradient="linear(to-r, #2d2d40, #eaeaeb)"
      borderRadius="10px"
    >
      <SkeletonCircle size="10" />
      <SkeletonText mt="4" noOfLines={4} spacing="4" />
    </Box>
  );
};
