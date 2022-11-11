import { Spinner } from '@chakra-ui/react';
import React from 'react';
import {
  Stack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Text,
  Flex,
  Box,
  Heading,
  Link,
  Image,
} from '@chakra-ui/react';
import heroPurple from '../components/assets/Homepage-bg-purple.png';
import phoneLazy from '../components/assets/lazyphone.png';

import { AiFillCheckCircle } from 'react-icons/ai';

import { FaLongArrowAltRight } from 'react-icons/fa';
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from 'react-icons/hi';

export default function PageLoading3() {
  return (
    <Box
      display="flex"
      minHeight="100vh"
      height="100%"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      bgGradient="linear(to-r, #25203a, #181125)"
      paddingBottom="20"
    >
      {/* <Flex
        w="100%"
        px={{ base: '5', md: '20', lg: '20' }}
        marginTop="50"
        justifyContent="space-between"
      >
        <Box
          padding="6"
          w="30%"
          boxShadow="lg"
          bgGradient="linear(to-r, #2d2d40, #eaeaeb)"
          borderRadius="10px"
        >
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
        <Box
          padding="6"
          w="30%"
          boxShadow="lg"
          bgGradient="linear(to-r, #2d2d40, #eaeaeb)"
          borderRadius="10px"
        >
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
        <Box
          padding="6"
          w="30%"
          boxShadow="lg"
          bgGradient="linear(to-r, #2d2d40, #eaeaeb)"
          borderRadius="10px"
        >
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
      </Flex> */}

      <Flex
        w="100%"
        px={{ base: '5', md: '20', lg: '20' }}
        justifyContent="space-between"
        marginTop="20"
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
    </Box>
  );
}
