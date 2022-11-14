import React, { useEffect, useState } from 'react';
import PageLoading from '../../helper/PageLoading';
// import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './FAQ.css';
import { useWallet } from '../../helper/WalletContext';
import privacyBG from '../../components/assets/FAQ-Background.png';
import {
  Box,
  Container,
  Text,
  Flex,
  Divider,
  Center,
  useColorModeValue,
  Heading,
  Image,
  Button,
  Select,
  bgImage,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

const FAQ = () => {
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
      px={{ base: '10', md: '20', lg: '20' }}
      py="40"
    >
      {loading ? (
        <PageLoading />
      ) : (
        <Flex
          justifyContent={'space-between'}
          height="auto"
          flexDirection="column"
          w="100%"
          flexWrap="nowrap"
          gap="10"
        >
          <Heading
            className="mainfont"
            as="h2"
            fontWeight="semibold"
            fontSize={{ base: '4xl', md: '4xl', lg: '7xl' }}
            textAlign="left"
          >
            FAQs
          </Heading>
          <Flex
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            display="flex"
            w="100%"
            gap="10"
          >
            <Box w="100%">
              <Heading
                className="mainfont"
                as="h3"
                fontWeight="semibold"
                fontSize={{ base: '4xl', md: '4xl', lg: '7xl' }}
                textAlign="center"
              >
                Services
              </Heading>
              <Accordion w="100%" defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        What is T-ORA?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    It is a decentralized Fact Checking platform that people
                    can use to debunk fake news. The  T-ORA is intended for 
                    the dissemination of information and education. 
                    The Site is deployed on the Tezos blockchain.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        What is FA2 Tokens?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Tezos has its own token standard, known as the Tezos Coin
                    Standard (or TCS). The TCS defines how tokens can be
                    transferred between accounts and how they can interact with
                    smart contracts. To simplify, FA2 Token is a token standard
                    on Tezos.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        What is Tezos Blockchain?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Tezos is a public blockchain that supports smart contracts
                    and decentralized applications.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>

            <Box w="100%">
              <Accordion w="100%" defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        How does the T-ORA work?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    The T-ORA is deployed on the Tezos blockchain
                    and works on the basis of widosm of crowd.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        What are information market platforms?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Information market platforms are online marketplaces that
                    allow users to buy and sell information products.
                    Information products can include anything from e-books and
                    courses to software and templates.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        What are some tips viewing information on market
                        platforms?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Here are some tips for viewing information on market
                    platforms: <br></br>-Check the reviews of the platform
                    before purchasing anything. <br></br>-Make sure the platform
                    you choose has a good reputation. <br></br>-Only buy from
                    reputable sellers. <br></br>-Be careful of scams.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Are there any other considerations I should keep in
                        mind?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Users are responsible for ensuring that they comply with all
                    applicable laws and should do their own research before
                    interacting with any smart contracts. <br></br>This FAQ is meant to
                    provide general information about information market
                    platforms. If you have specific questions about a particular
                    platform, please contact the platform directly.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          </Flex>
        </Flex>
      )}
    </Container>
  );
};

export default FAQ;
