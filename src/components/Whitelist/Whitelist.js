import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Flex,
  HStack,
  Container,
  IconButton,
  Button,
  Image,
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
  Link,
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
import { useWallet } from '../../helper/WalletContext';
import {
  CONTRACT_ADDRESS,
  TOKEN_ADDRESS,
  wallet,
  Tezos,
} from '../../helper/tezos';
import { TezosToolkit, MichelCodecPacker, compose } from '@taquito/taquito';
import Background from '../assets/Whitelistme-Background.png';

const Whitelist = () => {
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
      <Container
        width="100%"
        maxWidth="100%"
        display="flex"
        justifyContent="center"
        height="100vh"
        alignItems="center"
        bgImage={Background}
        bgPosition="center"
        bgSize="cover"
        px={{ base: '0', md: '20', lg: '20' }}
      >
        <Box
          display="flex"
          justifyContent={'space-between'}
          height="60vh"
          flexDirection="column"
          w="100%"
        >
          <Heading
            className="mainfont"
            as="h2"
            fontWeight="semibold"
            fontSize={{ base: '4xl', md: '4xl', lg: '7xl' }}
            textAlign={{ base: 'center', md: 'left', lg: 'left' }}
          >
            Whitelistme
          </Heading>

          {/* <Flex justifyContent="center">
            <Box
              display="flex"
              justifyContent="center"
              bgColor="#180F2B"
              w={{ base: '80%', md: '40%', lg: '40%' }}
              flexDirection="column"
              padding="10"
              borderRadius="20"
            >
              <Text textAlign="center">Redeem</Text>
              <Box>
                <Text textAlign="center">Redeem Token</Text>
                <Box bgColor="#180F2B">
                  <form onSubmit={submit}>
                    <FormControl>
                      <Input
                        required
                        type="number"
                        name="tokenId"
                        placeholder="Token ID"
                        _placeholder={{ color: 'white' }}
                      ></Input>
                    </FormControl>
                    <FormControl marginTop="5">
                      <Input
                        required
                        type="number"
                        name="amount"
                        placeholder="Amount"
                        _placeholder={{ color: 'white' }}
                      />
                    </FormControl>
                    <Flex justifyContent="center" marginTop="5">
                      <Button
                        type="submit"
                        bgColor="white"
                        color="black"
                        px="20"
                        borderRadius="20"
                      >
                        Redeem
                      </Button>
                    </Flex>
                  </form>
                </Box>
              </Box>
            </Box>
          </Flex> */}
        </Box>
      </Container>
    </>
  );
};
export default Whitelist;
