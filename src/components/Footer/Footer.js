import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';
import { FcNext } from 'react-icons/fc';
import { AiOutlineArrowRight, AiOutlineRight } from 'react-icons/ai';

import { HiOutlineChevronRight } from 'react-icons/hi';

import {
  Box,
  Flex,
  Center,
  HStack,
  Container,
  IconButton,
  Button,
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
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  FormControl,
  Form,
  Formik,
  FormLabel,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';

export default function Footer() {
  return (
    <>
      <Flex
        flexDirection={{ base: 'column', md: 'column', lg: 'column' }}
        color={useColorModeValue('white')}
        bg={'#1A1A1A'}
        px={{ base: '5', md: '20', lg: '20' }}
        paddingBottom="7"
      >
        <Flex
          py={5}
          justifyContent={'center'}
          flexDirection={{ base: 'row', md: 'row', lg: 'row' }}
        >
          <Link
            px={{ base: '0', md: '5', lg: '5' }}
            fontSize={{ md: 'sm', lg: 'sm' }}
            href="/Contact"
            className="links"
            _focus={{ outline: 'none' }}
          >
            Contact Us
          </Link>
          {/* <Link
            px={{ base: '0', md: '5', lg: '5' }}
            fontSize={{ md: 'sm', lg: 'sm' }}
            href="/Privacy"
            className="links"
          >
            Privacy Policy
          </Link> */}
          <Link
            px={{ base: '0', md: '5', lg: '5' }}
            fontSize={{ md: 'sm', lg: 'sm' }}
            href="/Terms"
            className="links"
            _focus={{ outline: 'none' }}
          >
            Terms of Use
          </Link>
          <Link
            px={{ base: '0', md: '5', lg: '5' }}
            fontSize={{ md: 'sm', lg: 'sm' }}
            href="/How"
            className="links"
            _focus={{ outline: 'none' }}
          >
            How it Works
          </Link>
          <Link
            px={{ base: '0', md: '5', lg: '5' }}
            fontSize={{ md: 'sm', lg: 'sm' }}
            href="/FAQ"
            className="links"
            _focus={{ outline: 'none' }}
          >
            FAQs
          </Link>
          <Link
            px={{ base: '0', md: '5', lg: '5' }}
            fontSize={{ md: 'sm', lg: 'sm' }}
            href="/Blogs"
            className="links"
            _focus={{ outline: 'none' }}
          >
            Blogs
          </Link>
        </Flex>

        <Flex
          paddingStart={{ base: '0', md: '20', lg: '20' }}
          paddingEnd={{ base: '0', md: '20', lg: '20' }}
          paddingBottom="10"
          paddingTop="18"
          borderBottom="1px solid"
          borderColor="gray"
          flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
        >
          <Box
            w={{ base: '100%', md: '100%', lg: '100%' }}
            paddingEnd={{ base: '0', md: '20', lg: '20' }}
          >
            <Flex flexDirection="column">
              <Heading as="h3" size="lg" paddingBottom="3">
                Disclaimers
              </Heading>
              <Text className="footer" fontSize={{ md: 'sm', lg: 'sm' }}>
                The T-ORA website (“Site”) is for informational and
                educational purposes only. The Site displays existing markets
                deployed on the Tezos blockchain and is a graphical user
                interface for both visualizing data from on-chain activity and
                interacting with smart contracts directly from your own Tezos
                wallet. Users are responsible for complying with all applicable 
                laws and should conduct their own analysis and consult with 
                professional advisors prior to entering into any smart contracts.
              </Text>
            </Flex>
          </Box>

          {/* <Box w={{ base: '100%', md: '50%', lg: '50%' }} marginTop={{ base: '20px', md: '0px', lg: '0px' }}>
            <Box w="100%">
              <Heading as="h4" size="sm">
                Subcribe to our newsletter
              </Heading>
              <Box paddingTop="7" w="100%">
                <form position="relative" display="flex" flex-direction="row">
                  <InputGroup className="label">
                    <Input
                      className="email"
                      type="text"
                      placeholder="Enter Email Address..."
                      w="70%"
                      bgColor="white"
                      focusBorderColor="none"
                    />
                    <InputGroup
                      w={{ base: '45%', md: '30%', lg: '30%' }}
                      className="inputbtn"
                    >
                      <AiOutlineRight
                        className="arrowright"
                        color="#FFFFFF"
                        zIndex="99"
                      />
                      <Input
                        className="btn-submit"
                        type="submit"
                        value="Subscribe"
                        bgColor="#9C4FFF"
                        marginLeft={{ base: '-2', md: '-10', lg: '-10' }}
                        zIndex="10"
                      />
                    </InputGroup>
                  </InputGroup>
                </form>
              </Box>
            </Box>

            <Box paddingTop="8">
              <Heading as="h4" size="sm" paddingBottom="3">
                Bet on your beliefs
              </Heading>
              <Text className="footer" fontSize={{ md: 'sm', lg: 'sm' }}>
                Predictor is a decentralized information markets platform,
                harnessing the power of free markets to demystify the real world
                events that matter most to you.
              </Text>
            </Box>
          </Box> */}
        </Flex>
        <Center paddingTop="7">© 2022 Predictor. All rights reserved.</Center>
      </Flex>
    </>
  );
}
