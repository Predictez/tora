import React, { useEffect, useState } from 'react';
import { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Terms.css';
import { useWallet } from '../../helper/WalletContext';
import Background from '../../components/assets/TermsUse.png';
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

const Terms = () => {
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
            Terms of Use
          </Heading>
          <Flex
            alignItems={'center'}
            justifyContent="center"
            flexDirection="column"
          >
            <p>
              Predictor is a decentralized prediction market platform that
              people can use to create predictions and trade FA2 tokens which is
              made up of free, public, open-source or source-available software
              including a set of smart contracts that are deployed on the Tezos
              Blockchain. Your use of the Predictor platform involves various
              risks, including, but not limited to, losses while digital assets
              are being supplied to the Predictor protocol and losses due to the
              fluctuation of prices of tokens in a trading pair or liquidity
              pool. Before using the Predictor , you should review the relevant
              documentation to make sure you understand how the Predictor works.
              Additionally, just as you can access email protocols such as SMTP
              through multiple email clients, you can access the Predictor
              through various web or mobile interfaces. You are responsible for
              doing your own diligence on those interfaces to understand the
              fees and risks they present.
            </p>
            <br></br>

            <p>
              AS DESCRIBED IN THE PREDICTOR LICENSES, THE PREDICTOR IS PROVIDED
              "AS IS", AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND. The
              Predictor does not provide, own, or control the Predictor
              platform, which is run by smart contracts deployed on the Tezos
              blockchain. No developer or entity involved in creating the
              Predictor will be liable for any claims or damages whatsoever
              associated with your use, inability to use, or your interaction
              with other users of, the Predictor protocol, including any direct,
              indirect, incidental, special, exemplary, punitive or
              consequential damages, or loss of profits, cryptocurrencies,
              tokens, or anything else of value. <br></br>
              <br></br>By using this websites and the derived platforms, you
              accept and agree to the above terms.
            </p>
          </Flex>
        </Flex>
      )}
    </Container>
  );
};

export default Terms;
