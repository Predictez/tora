import React, { useEffect, useState } from 'react';
import PageLoading from '../../helper/PageLoading';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Privacy.css';
import { useWallet } from '../../helper/WalletContext';
import privacyBG from '../../components/assets/Privacy-Background.png';
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

export default function Privacy() {
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
      bgImage={privacyBG}
      bgPosition="center"
      bgSize="cover"
      w="100%"
      maxWidth="100%"
      padding={{ base: '10', md: '20', lg: '20' }}
      flexWrap="wrap"
    >
      {loading ? (
        <PageLoading />
      ) : (
        <Flex
          justifyContent={'space-between'}
          height="auto"
          flexDirection="column"
          w="100%"
          gap="10"
        >
          <Heading
            className="mainfont"
            as="h2"
            fontWeight="semibold"
            fontSize={{ base: '4xl', md: '4xl', lg: '7xl' }}
          >
            Privacy Policys
          </Heading>
          <Flex
            alignItems={'center'}
            justifyContent="center"
            flexDirection="column"
            flexWrap="wrap"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              velit nisi, pretium ut lacinia in, elementum id enim. Curabitur
              aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci
              porta dapibus. Vivamus suscipit tortor eget felis porttitor
              volutpat. Pellentesque in ipsum id orci porta dapibus. Quisque
              velit nisi, pretium ut lacinia in, elementum id enim. Donec rutrum
              congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Curabitur non nulla sit amet nisl tempus
              convallis quis ac lectus. Vestibulum ac diam sit amet quam
              vehicula elementum sed sit amet dui. Donec sollicitudin molestie
              malesuada. Curabitur non nulla sit amet nisl tempus convallis quis
              ac lectus. Pellentesque in ipsum id orci porta dapibus. Vivamus
              suscipit tortor eget felis porttitor volutpat. Pellentesque in
              ipsum id orci porta dapibus. Quisque velit nisi, pretium ut
              lacinia in, elementum id enim. Donec rutrum congue leo eget
              malesuada. Pellentesque in ipsum id orci porta dapibus. Vivamus
              suscipit tortor eget felis porttitor volutpat. Pellentesque in
              ipsum id orci porta dapibus. Quisque velit nisi, pretium ut
              lacinia in, elementum id enim. Donec rutrum congue leo eget
              malesuada. Lorem ipsum dolor sit amet, consectetur
            </p>
            <br></br>

            <p>
              adipiscing elit. Curabitur non nulla sit amet nisl tempus
              convallis quis ac lectus. Vestibulum ac diam sit amet quam
              vehicula elementum sed sit amet dui. Donec sollicitudin molestie
              malesuada. Curabitur non nulla sit amet nisl tempus convallis quis
              ac lectus. Pellentesque in ipsum id orci porta dapibus. Vivamus
              suscipit tortor eget felis porttitor volutpat. Pellentesque in
              ipsum id orci porta dapibus. Quisque velit nisi, pretium ut
              lacinia in, elementum id enim. Donec rutrum congue leo eget
              malesuada. Lorem ipsum dolor sit amet. Pellentesque in ipsum id
              orci porta dapibus. Vivamus suscipit tortor eget felis porttitor
              volutpat. Pellentesque in ipsum id orci porta dapibus. Quisque
              velit nisi, pretium ut lacinia in, elementum id enim. Donec rutrum
              congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Curabitur non nulla sit amet nisl tempus
              convallis quis ac lectus. Vestibulum ac diam sit amet quam
              vehicula elementum sed sit amet dui. Donec sollicitudin molestie
              malesuada. Curabitur non nulla sit amet nisl tempus convallis quis
              ac lectus. din molestie malesuada. Curabitur non nulla sit amet
              nisl tempus convallis quis ac lectus.
            </p>
          </Flex>
        </Flex>
      )}
    </Container>
  );
}
