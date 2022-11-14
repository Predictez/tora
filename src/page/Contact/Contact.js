import React, { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Contact.css';
import { useWallet } from '../../helper/WalletContext';
import contactBG from '../../components/assets/Contact-Background.png';
import PageLoading from '../../helper/PageLoading';
import twitter from '../../components/assets/Twitter.svg';
import telegram from '../../components/assets/Telegram.svg';
import {
  Box,
  Container,
  Text,
  Flex,
  Divider,
  Center,
  Link,
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
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  Stack,
  Radio,
} from '@chakra-ui/react';

const Contact = () => {
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
      height="100vh"
      bgImage={contactBG}
      bgPosition="center"
      bgSize="cover"
      w="100%"
      maxWidth="100%"
      px={{ base: '10', md: '20', lg: '20' }}
    >
      {loading ? (
        <PageLoading />
      ) : (
        <Flex
          justifyContent={'space-between'}
          height="30vh"
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
            Talk To Us
          </Heading>
          <Flex justifyContent="center" flexDirection="row" alignItems="center">
            <Link href="https://twitter.com/TORA_tez">
              <Image height="70px" px="6" src={twitter} />
            </Link>
            <Link href="https://t.me/predictor_tez">
              <Image height="70px" px="6" src={telegram} />
            </Link>
          </Flex>
        </Flex>
      )}
    </Container>
  );
};

export default Contact;

const Contactform = () => {
  <FormControl bgColor="#180F2B" w="50%" padding="10" borderRadius="10">
    <FormControl display="flex" marginBottom="5">
      <Box w="50%">
        <FormLabel htmlFor="name" color="#CEB0F5">
          First Name
        </FormLabel>
        <Input
          id="name"
          placeholder="First Name"
          _placeholder={{ color: '#757575' }}
        />
      </Box>
      <Box w="50%">
        <FormLabel htmlFor="name" color="#CEB0F5">
          Last Name
        </FormLabel>
        <Input
          id="name"
          placeholder="First Name"
          _placeholder={{ color: '#757575' }}
        />
      </Box>
    </FormControl>

    <FormLabel htmlFor="email" marginBottom="5" color="#CEB0F5">
      Email
    </FormLabel>
    <Input
      id="email"
      type="email"
      placeholder="Example@email.com"
      _placeholder={{ color: '#757575' }}
      marginBottom="5"
    />
    <FormLabel htmlFor="name" color="#CEB0F5">
      How can we help you?
    </FormLabel>
    <Textarea
      marginBottom="5"
      placeholder="Here is a sample placeholder"
      _placeholder={{ color: '#757575' }}
    />
    <Stack marginBottom="5">
      <Radio size="sm" name="1" colorScheme="red">
        Send me product updates and helpful resources about Rise.
      </Radio>
      <Radio size="sm" name="1" colorScheme="red">
        I consent to the use of my personal information as specified in the Rise
        privacy policy, including the cookie policy.
      </Radio>
    </Stack>
    <Center marginTop="10">
      <Button
        marginLeft="auto"
        marginRight="auto"
        type="submit"
        bgColor="#9C4FFF"
        px="40"
      >
        Submit
      </Button>
    </Center>
  </FormControl>;
};
