import React, { useEffect, useState } from 'react';
import { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Blogs.css';
import { useWallet } from '../../helper/WalletContext';
import Background from '../../components/assets/Blog.png';
import ImageBlog from '../../components/assets/BlogImage.png';
import PageLoading from '../../helper/PageLoading';
import {
  Box,
  Container,
  Text,
  Flex,
  Divider,
  Center,
  useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Heading,
  Image,
  Button,
  Select,
  bgImage,
  Link,
} from '@chakra-ui/react';

const How = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Container
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="auto"
      bgImage={Background}
      bgPosition="center"
      bgSize="cover"
      w="100%"
      maxWidth="100%"
      px={{ base: '5', md: '20', lg: '20' }}
    >
      {loading ? (
        <PageLoading />
      ) : (
        <Flex
          justifyContent={'center'}
          height="auto"
          flexDirection="column"
          alignItems="center"
          display="flex"
          w="100%"
          gap="10"
          py="40"
        >
          <Box
            display="flex"
            alignItems={'left'}
            justifyContent="center"
            flexDirection="row"
            bgColor="#180F2B"
            borderRadius="30"
            w={{ base: '100%', md: '40%', lg: '40%' }}
            height={{ base: '35vh', md: '40vh', lg: '40vh' }}
            className="main"
          >
            <Box
              className="title"
              w="48%"
              display="flex"
              gap="5"
              flexDirection="column"
            >
              <Box>
                <Link
                  className="mainfont"
                  fontWeight="semibold"
                  fontSize="3xl"
                  textAlign="left"
                  lineHeight="1"
                  href="https://medium.com/@karthi1908/predictor-c90398056061"
                  zIndex="999"
                  _focus={{ outline: 'none' }}
                >
                  Getting Started with Predictor
                </Link>
              </Box>

              <Box display="flex" gap="2" flexDirection="column">
                <Text
                  className="mainfont"
                  as="h2"
                  fontWeight="semibold"
                  size="md"
                  textAlign="left"
                >
                  Predict<span className="or">or</span>
                </Text>
              </Box>
            </Box>
            <Box
              gap="4"
              w="50%"
              display="flex"
              alignItems="start"
              flexDirection="column"
              justifyContent="center"
            ></Box>
            <Box
              w="50%"
              bgImage={ImageBlog}
              bgPosition="center"
              bgSize="cover"
              className="imageblog"
              zIndex="1"
            ></Box>
          </Box>

          <Box
            display="flex"
            alignItems={'left'}
            justifyContent="center"
            flexDirection="row"
            bgColor="#180F2B"
            borderRadius="30"
            w={{ base: '100%', md: '40%', lg: '40%' }}
            height={{ base: '35vh', md: '40vh', lg: '40vh' }}
            className="main"
          >
            <Box
              className="title"
              w="48%"
              display="flex"
              gap="5"
              flexDirection="column"
            >
              <Box>
                <Link
                  className="mainfont"
                  fontWeight="semibold"
                  fontSize="3xl"
                  textAlign="left"
                  lineHeight="1"
                  href="https://medium.com/coinmonks/predictor-da7efb0163ca"
                  _focus={{ outline: 'none' }}
                >
                  The Decentralised Prediction Markets on Tezos
                </Link>
              </Box>

              <Box display="flex" gap="2" flexDirection="column">
                <Text
                  className="mainfont"
                  as="h2"
                  fontWeight="semibold"
                  size="md"
                  textAlign="left"
                >
                  Predict<span className="or">or</span>
                </Text>
              </Box>
            </Box>
            <Box
              gap="4"
              w="50%"
              display="flex"
              alignItems="start"
              flexDirection="column"
              justifyContent="center"
            ></Box>
            <Box
              w="50%"
              bgImage={ImageBlog}
              bgPosition="center"
              bgSize="cover"
              className="imageblog"
              zIndex="1"
            ></Box>
          </Box>

          <Box
            display="flex"
            alignItems={'left'}
            justifyContent="center"
            flexDirection="row"
            bgColor="#180F2B"
            borderRadius="30"
            w={{ base: '100%', md: '40%', lg: '40%' }}
            height={{ base: '35vh', md: '40vh', lg: '40vh' }}
            className="main"
          >
            <Box
              className="title"
              w="48%"
              display="flex"
              gap="5"
              flexDirection="column"
            >
              <Box>
                <Link
                  className="mainfont"
                  fontWeight="semibold"
                  fontSize="3xl"
                  textAlign="left"
                  lineHeight="1"
                  href="https://medium.com/@karthi1908/predictor-d01e6c67de0e"
                  _focus={{ outline: 'none' }}
                >
                  How to buy / trade predictions on Predictor?
                </Link>
              </Box>

              <Box display="flex" gap="2" flexDirection="column">
                <Text
                  className="mainfont"
                  as="h2"
                  fontWeight="semibold"
                  size="md"
                  textAlign="left"
                >
                  Predict<span className="or">or</span>
                </Text>
              </Box>
            </Box>
            <Box
              gap="4"
              w="50%"
              display="flex"
              alignItems="start"
              flexDirection="column"
              justifyContent="center"
            ></Box>
            <Box
              w="50%"
              bgImage={ImageBlog}
              bgPosition="center"
              bgSize="cover"
              className="imageblog"
              zIndex="1"
            ></Box>
          </Box>
        </Flex>
      )}
    </Container>
  );
};

export default How;
