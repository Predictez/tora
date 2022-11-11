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

export default function Loading() {
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
      <Box
        display="flex"
        width="100%"
        paddingStart={{ base: '5vh', md: '25vh', lg: '25vh' }}
        paddingEnd={{ base: '5vh', md: '25vh', lg: '25vh' }}
        paddingTop="10vh"
        bgImage={heroPurple}
        bgPosition="center"
        bgSize="cover"
        flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
      >
        <Box
          w={{ base: 'auto', md: '55%', lg: '55%' }}
          display="flex"
          flexDirection={{ base: 'column', md: 'column', lg: 'column' }}
        >
          <Skeleton
            borderRadius="20"
            bgGradient="linear(to-r, #2d2d40, #eaeaeb)"
          >
            <SkeletonCircle size="4" />
            <SkeletonText mt="4" noOfLines={3} spacing="3" />
          </Skeleton>

          <Stack w="60%" marginTop="10">
            <Skeleton height="20px" borderRadius="10" />
            <Skeleton height="20px" borderRadius="10" />
            <Skeleton height="20px" borderRadius="10" />
          </Stack>

          <Flex
            justifyContent="space-between"
            w="50%"
            marginLeft="30px"
            marginTop="40px"
          >
            <Skeleton w="30%" height="20px" borderRadius="10" />
            <Skeleton w="30%" height="20px" borderRadius="10" />
            <Skeleton w="30%" height="20px" borderRadius="10" />
          </Flex>

          <Flex
            justifyContent="space-start"
            w="55%"
            marginTop="20px"
            alignItems="center"
          >
            <Skeleton w="40%" height="40px" borderRadius="10" />
            <Skeleton w="20%" height="20px" marginLeft="5" borderRadius="10" />
          </Flex>

          <Flex justifyContent="space-between" w="55%" marginTop="30px">
            <Skeleton w="30%" height="40px" borderRadius="10" />
            <Skeleton w="30%" height="40px" borderRadius="10" />
            <Skeleton w="30%" height="40px" borderRadius="10" />
          </Flex>

          <Flex justifyContent="space-between" w="50%" marginTop="20px">
            <Skeleton w="30%" height="20px" borderRadius="10" />
            <Skeleton w="30%" height="20px" borderRadius="10" />
            <Skeleton w="30%" height="20px" borderRadius="10" />
          </Flex>
        </Box>
        <Box
          w={{ base: '100%', md: '45%', lg: '45%' }}
          display="flex"
          justifyContent="center"
        >
          <Image
            boxSize={{ base: '400px', md: '700px', lg: '700px' }}
            objectFit="cover"
            marginTop={{ base: '0px', md: '-100px', lg: '-100px' }}
            src={phoneLazy}
            zIndex="10"
          />
        </Box>
      </Box>
      <Flex
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
      </Flex>

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
