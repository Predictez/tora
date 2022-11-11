import React, { useEffect, useState } from 'react';
import { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './How.css';
import { useWallet } from '../../helper/WalletContext';
import Background from '../../components/assets/How.png';
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
      py={{ base: '10', md: '120', lg: '120' }}
      px={{ base: '10', md: '20', lg: '20' }}
    >
      {loading ? (
        <PageLoading />
      ) : (
        <Flex
          justifyContent={'start'}
          height="100vh"
          flexDirection="column"
          w="100%"
          gap="5"
        >
          <Heading
            className="mainfont"
            as="h2"
            fontWeight="semibold"
            fontSize={{ base: '4xl', md: '4xl', lg: '7xl' }}
          >
            How It Works
          </Heading>
          <Flex
            alignItems={'start'}
            justifyContent="center"
            flexDirection="column"
          >
            <Link
              fontSize="2xl"
              href="https://medium.com/@karthi1908/predictor-c90398056061"
              _focus={{ outline: 'none' }}
            >
              Getting started with Predictor
            </Link>
            <br></br>

            <Link
              fontSize="2xl"
              href="https://medium.com/@karthi1908/predictor-d01e6c67de0e"
              _focus={{ outline: 'none' }}
            >
              How to buy / trade predictions on Predictor?
            </Link>
          </Flex>
        </Flex>
      )}
    </Container>
  );
};

export default How;
