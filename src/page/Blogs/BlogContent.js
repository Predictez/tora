import React, { useEffect, useState } from 'react';
import { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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
} from '@chakra-ui/react';

const BlogContent = () => {
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
      py="50"
    >
      {loading ? (
        <PageLoading />
      ) : (
        <Box
          w="100%"
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          gap="20"
        >
          <Box
            height="30vh"
            bgColor="#180F2B"
            w={{ base: '100%', md: '40%', lg: '40%' }}
            display="flex"
            className="main"
            borderRadius="30"
          >
            <Box
              className="title"
              w="48%"
              display="flex"
              gap="5"
              flexDirection="column"
            >
              <Box>
                <Text
                  className="mainfont"
                  fontWeight="semibold"
                  fontSize="3xl"
                  textAlign="left"
                  lineHeight="1"
                >
                  Why Prediction Markets are Good for Society
                </Text>
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

                <Text fontSize="xs">By: Lorem Ipsum</Text>
              </Box>
            </Box>
            <Box
              gap="4"
              w="50%"
              display="flex"
              alignItems="start"
              flexDirection="column"
              justifyContent="center"
              height="30vh"
            ></Box>

            <Box
              w="50%"
              bgImage={ImageBlog}
              bgPosition="center"
              bgSize="cover"
              className="imageblog"
              height="30vh"
            ></Box>
          </Box>

          <Box px={{ base: '10', md: '100', lg: '100' }}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est.
            </Text>
          </Box>

          <Box
            w="100%"
            display="flex"
            gap="7"
            flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
          >
            <Box
              height="30vh"
              bgColor="#180F2B"
              w={{ base: '100%', md: '33%', lg: '33%' }}
              display="flex"
              className="main"
              borderRadius="30"
            >
              <Box
                className="title"
                w="48%"
                display="flex"
                gap="5"
                flexDirection="column"
              >
                <Box>
                  <Text
                    className="mainfont"
                    fontWeight="semibold"
                    fontSize="2xl"
                    textAlign="left"
                    lineHeight="1"
                  >
                    Why Prediction Markets are Good for Society
                  </Text>
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

                  <Text fontSize="xs">By: Lorem Ipsum</Text>
                </Box>
              </Box>
              <Box
                gap="4"
                w="50%"
                display="flex"
                alignItems="start"
                flexDirection="column"
                justifyContent="center"
                height="30vh"
              ></Box>

              <Box
                w="50%"
                bgImage={ImageBlog}
                bgPosition="center"
                bgSize="cover"
                className="imageblog"
                height="30vh"
              ></Box>
            </Box>

            <Box
              height="30vh"
              bgColor="#180F2B"
              w={{ base: '100%', md: '33%', lg: '33%' }}
              display="flex"
              className="main"
              borderRadius="30"
            >
              <Box
                className="title"
                w="48%"
                display="flex"
                gap="5"
                flexDirection="column"
              >
                <Box>
                  <Text
                    className="mainfont"
                    fontWeight="semibold"
                    fontSize="2xl"
                    textAlign="left"
                    lineHeight="1"
                  >
                    Why Prediction Markets are Good for Society
                  </Text>
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

                  <Text fontSize="xs">By: Lorem Ipsum</Text>
                </Box>
              </Box>
              <Box
                gap="4"
                w="50%"
                display="flex"
                alignItems="start"
                flexDirection="column"
                justifyContent="center"
                height="30vh"
              ></Box>

              <Box
                w="50%"
                bgImage={ImageBlog}
                bgPosition="center"
                bgSize="cover"
                className="imageblog"
                height="30vh"
              ></Box>
            </Box>

            <Box
              height="30vh"
              bgColor="#180F2B"
              w={{ base: '100%', md: '33%', lg: '33%' }}
              display="flex"
              className="main"
              borderRadius="30"
            >
              <Box
                className="title"
                w="48%"
                display="flex"
                gap="5"
                flexDirection="column"
              >
                <Box>
                  <Text
                    className="mainfont"
                    fontWeight="semibold"
                    fontSize="2xl"
                    textAlign="left"
                    lineHeight="1"
                  >
                    Why Prediction Markets are Good for Society
                  </Text>
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

                  <Text fontSize="xs">By: Lorem Ipsum</Text>
                </Box>
              </Box>
              <Box
                gap="4"
                w="50%"
                display="flex"
                alignItems="start"
                flexDirection="column"
                justifyContent="center"
                height="30vh"
              ></Box>

              <Box
                w="50%"
                bgImage={ImageBlog}
                bgPosition="center"
                bgSize="cover"
                className="imageblog"
                height="30vh"
              ></Box>
            </Box>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default BlogContent;
