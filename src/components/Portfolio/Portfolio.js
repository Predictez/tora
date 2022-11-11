import React, { useEffect, useState } from 'react';

import PageLoading from '../../helper/PageLoading2';

import { useNavigate } from 'react-router-dom';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Portfolio.css';
import { useWallet } from '../../helper/WalletContext';
import portfolioBG from '../assets/Portfolio-Background.png';
import portfolioPurple from '../assets/Portfolio-bg.png';
import {
  Box,
  Flex,
  HStack,
  Center,
  Container,
  IconButton,
  Button,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  FormControl,
  FormLabel,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Input,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';

import {
  CONTRACT_ADDRESS,
  TOKEN_ADDRESS,
  wallet,
  Tezos,
} from '../../helper/tezos';
import { TezosToolkit, MichelCodecPacker, compose } from '@taquito/taquito';
import Loading from '../../helper/Loading';

const Redeem = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const submit = async (e) => {
    e.preventDefault();
    const { tokenId, amount } = e.target.elements;
    console.log(tokenId.value, amount.value);
    const contract = await wallet.at(CONTRACT_ADDRESS);

    const op = await contract.methods
      .redeemTokens(parseInt(amount.value), parseInt(tokenId.value))
      .send();
    await op.confirmation(1);
    alert('Redemption Completed!');
  };

  return (
    <>
      <MenuItem onClick={onOpen}>Redeem</MenuItem>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Redeem Token</ModalHeader>
          <ModalBody>
            <form onSubmit={submit}>
              <FormControl>
                <Input
                  required
                  type="number"
                  name="tokenId"
                  placeholder="Token ID"
                ></Input>
              </FormControl>
              <FormControl>
                <Input
                  required
                  type="number"
                  name="amount"
                  placeholder="Amount"
                />
              </FormControl>
              <Button type="submit">Redeem</Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default function Portfolio({ links = [] }) {
  const history = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { connect, disconnect, activeAccount, connected } = useWallet();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const whiteListProposer = async () => {
    const contract = await wallet.at(CONTRACT_ADDRESS);
    const op1 = await contract.methods
      .addProposers(activeAccount.address)
      .send();

    await op1.confirmation(1);
    alert('Proposer Whitelisted!');
  };

  return (
    <Box
      px={{ base: '5', md: '20', lg: '20' }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="auto"
      bgImage={portfolioBG}
      bgPosition="center"
      bgSize="cover"
      w="100%"
      flexWrap="wrap"
    >
      <Flex
        justifyContent={{
          base: 'center',
          md: 'space-between',
          lg: 'space-between',
        }}
        flexDirection="row"
        py={{ base: '10vh', md: '35vh', lg: '35vh' }}
        w="100%"
        flexWrap="wrap"
        // bgColor="red"
      >
        <Heading
          className="mainfont"
          as="h2"
          fontWeight="semibold"
          fontSize={{ base: '4xl', md: '4xl', lg: '7xl' }}
        >
          Portfolios
        </Heading>
        <Box
          alignItems="center"
          justifyContent="center"
          w="100%"
          flexWrap="wrap"
          px={{ base: '3', md: '0', lg: '0' }}
          // bgColor="pink"
          display="flex"
        >
          <Box
            display={{ base: 'flex', md: 'flex' }}
            flexWrap="wrap"
            w={{ base: '100%', md: '32%', lg: '45%' }}
            className="box-div"
          >
            {loading ? (
              <PageLoading />
            ) : !connected ? (
              <Box
                padding="20"
                bgColor="#180F2Bed"
                borderRadius="10"
                w="100%"
                flexWrap="wrap"
                display="flex"
                justifyContent="center"
              >
                <Button
                  onClick={connect}
                  color="black"
                  px="20"
                  borderRadius="20"
                  bgColor="white"
                >
                  Connect Wallet
                </Button>
              </Box>
            ) : (
              <PortfolioComponent />
            )}
          </Box>
        </Box>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {!connected ? (
              <Button onClick={connect}>Connect Wallet</Button>
            ) : (
              <Menu>
                <MenuButton as={Button} cursor={'pointer'} minW={0}>
                  <Text
                    maxW="40%"
                    overflow="hidden"
                    whiteSpace="nowrap"
                    textOverflow="ellipsis"
                  >
                    {activeAccount?.address}
                  </Text>
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => history('/mypreds')}>
                    My Predictions
                  </MenuItem>
                  <MenuItem onClick={disconnect}>Disconnect</MenuItem>
                </MenuList>
              </Menu>
            )}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}

const PortfolioComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const colors = {
    bg: useColorModeValue('purple.100', 'purple.700'),
    text: useColorModeValue('blue', 'black'),
  };
  const { connect, disconnect, activeAccount, connected } = useWallet();
  const [data, setData] = React.useState(null);

  let ledger = [];
  React.useEffect(async () => {
    if (!connected) {
      await connect();
    }
    if (activeAccount) {
      console.log(activeAccount);
      console.log(activeAccount.address);
      const tokenContract = await Tezos.contract.at(TOKEN_ADDRESS);
      const tokenStore = await tokenContract.storage();
      const tokenLedger = tokenStore.ledger;
      console.log(tokenLedger);
      let tokens = tokenStore.all_tokens.toString().split(',').map(Number);
      console.log(tokens);

      for (let tokenId = tokens.length - 1; tokenId >= 0; tokenId--) {
        console.log(tokenId, tokens[tokenId]);
        await tokenLedger
          .get([activeAccount.address, tokens[tokenId]])
          .then((value) => {
            if (value > 0) {
              ledger.push({ id: tokens[tokenId], balance: value.toString() });
            }
          })
          .catch((error) =>
            console.log(`Error: ${tokens[tokenId]} ${activeAccount.address}`)
          );
        console.log(ledger);
      }

      setData(ledger);
    }
  }, [activeAccount]);
  return (
    data && (
      <Box w="100%">
        <Box
          marginTop="4vh"
          bgColor="#180F2B"
          w={{ base: 'auto', md: '100%', lg: '100%' }}
          borderRadius="10"
          paddingTop="100px"
          paddingBottom="100px"
          paddingLeft="20px"
          paddingRight="20px"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Text color="white" textAlign="center">
            Portfolio Details
          </Text>
          <Box>
            <Text color="white" textAlign="center">
              {' '}
              <b> Portfolio </b>{' '}
            </Text>

            <Box
              display="flex"
              flexDirection="column"
              flexWrap="wrap"
              alignItems="center"
            >
              {data.map((pred, i) => {
                return (
                  <Box
                    key={i}
                    display="flex"
                    w="90%"
                    flexDirection="column"
                    border="0px solid"
                    borderRadius="15px"
                    padding="5px"
                    marginBottom="1vh"
                    marginTop="3vh"
                  >
                    <Flex
                      flexDirection="row"
                      justifyContent="center"
                      alignItems="center"
                      py="5"
                      px="3"
                    >
                      <Text color="white" textAlign="center">
                        Token id &nbsp;: &nbsp; {pred.id} &nbsp;
                      </Text>
                      <Text color="white" textAlign="center">
                        Balance &nbsp; : &nbsp; {pred.balance}&emsp;
                      </Text>
                      <Box>
                        <Redeem1 tokenID={pred.id} px="2" />
                      </Box>
                    </Flex>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    )
  );
};

const Redeem1 = (tokenID) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log('tokenId', tokenID.tokenID.toString());
  const colors = {
    bg: useColorModeValue('purple.300', 'purple.600'),
    text: useColorModeValue('purple', 'white'),
  };
  const submit = async (e) => {
    e.preventDefault();
    const { amount } = e.target.elements;
    console.log(tokenID.tokenID, amount.value);
    const contract = await wallet.at(CONTRACT_ADDRESS);

    await contract.methods.redeemTokens(amount.value, tokenID.tokenID).send();
  };

  return (
    <Popover returnFocusOnClose={false} placement="right" closeOnBlur={false}>
      <PopoverTrigger>
        <Button bgColor="#9C4FFF" color="white">
          Redeem
        </Button>
      </PopoverTrigger>
      <PopoverContent textColor={colors.text} bgColor="#1A1A1A">
        <PopoverHeader fontWeight="semibold" color="white">
          Redeem Token
        </PopoverHeader>
        <PopoverBody gap="10">
          <form onSubmit={submit}>
            <FormControl>
              <FormLabel htmlFor="tokenID" color="white">
                Token Id : {tokenID.tokenID.toString()}{' '}
              </FormLabel>
            </FormControl>
            <FormControl>
              <Input
                required
                type="number"
                name="amount"
                placeholder="Amount"
                _placeholder={{ color: 'white' }}
                _focus={{ color: 'white' }}
              />
            </FormControl>
            <Button type="submit" marginTop="5">
              Redeem
            </Button>
          </form>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
