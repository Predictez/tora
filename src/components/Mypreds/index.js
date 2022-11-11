import React, { Component, useEffect } from 'react';
import PredictionContext from '../../helper/PredictionContext';
import './index.css';
import portfolioBG from '../assets/Predictions-Background.png';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useColorModeValue,
  CloseButton,
  Flex,
  Center,
  Heading,
} from '@chakra-ui/react';
import { useWallet } from '../../helper/WalletContext';
import Loading from '../../helper/Loading';
import {
  CONTRACT_ADDRESS,
  wallet,
  Tezos,
  TOKEN_ADDRESS,
} from '../../helper/tezos';

import { useState } from 'react';

import Modal from 'react-modal';

const AddPredRes = ({ pred }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const colors = {
    bg: useColorModeValue('blue.200', 'blue.700'),
    text: useColorModeValue('blue', 'white'),
  };

  const submit = async (e) => {
    e.preventDefault();
    const { option } = e.target.elements;
    console.log(option.value);
    const contract = await wallet.at(CONTRACT_ADDRESS);
    const result = await contract.methods
      .predictResults(pred.predictionRef, option.value)
      .send();
    await result.confirmation(1);
    alert('Result Updated!');
  };

  return (
    <Popover returnFocusOnClose={false} placement="right" closeOnBlur={false}>
      <PopoverTrigger>
        <Button
          onClick={() => setIsOpen(true)}
          bg="#9C4FFF"
          textColor="white"
          marginLeft="10px"
        >
          Result
        </Button>
      </PopoverTrigger>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        textColor="white"
        textAlign="center"
        bgColor="#9C4FFF"
        className="statDiv"
        left={{ base: '-68%', md: '0', lg: '0' }}
      >
        <Flex px="1vh">
          <Flex w={{ base: '10%', md: '10%', lg: '25%' }}></Flex>
          <Flex
            w={{ base: '80%', md: '80%', lg: '50%' }}
            justifyContent="center"
          >
            <PopoverHeader
              fontWeight="semibold"
              textAlign="center"
              // marginLeft="-100px"
            >
              Update Prediction Result
            </PopoverHeader>
          </Flex>
          <Flex w={{ base: '10%', md: '10%', lg: '25%' }} justifyContent="end">
            <CloseButton
              onClick={() => setIsOpen(false)}
              color="red"
              left="60%"
              marginTop="4px"
              marginLeft="4vh"
            ></CloseButton>
          </Flex>
        </Flex>

        <PopoverBody>
          <form onSubmit={submit}>
            <FormControl>
              <FormLabel htmlFor={pred.id + '_status'} textAlign="center">
                Options
              </FormLabel>
              <RadioGroup name="option">
                <Stack direction="column">
                  {pred.predictionOptions.map((option, i) => {
                    return (
                      <Radio key={i} value={option}>
                        <Box
                          borderWidth="1px"
                          borderColor="purple.400"
                          py="2"
                          px="3"
                          borderRadius="2xl"
                          color="white"
                          bgColor="purple.400"
                        >
                          {option}
                        </Box>
                      </Radio>
                    );
                  })}
                </Stack>
              </RadioGroup>
            </FormControl>
            <Center marginTop="2vh">
              <Button type="submit" bgColor="#9C4FFF">
                Submit
              </Button>
            </Center>
          </form>
        </PopoverBody>
      </Modal>
    </Popover>
  );
};

const UpdatePredStatus = ({ pred }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const colors = {
    bg: useColorModeValue('blue.200', 'blue.700'),
    text: useColorModeValue('blue', 'white'),
  };

  const submit = async (e) => {
    e.preventDefault();
    const { status } = e.target.elements;

    const contract = await wallet.at(CONTRACT_ADDRESS);
    const st = await contract.methods
      .updateStatus(pred.predictionRef, status.value)
      .send();
    st.confirmation();
    alert('Status Updated!');
  };
  return (
    <Popover returnFocusOnClose={false} placement="right" closeOnBlur={false}>
      <PopoverTrigger>
        <Button
          onClick={() => setIsOpen(true)}
          textColor="white"
          bgColor="#9C4FFF"
          px="5"
          marginLeft="5px"
        >
          Update
        </Button>
      </PopoverTrigger>
      <Modal
        textColor="white"
        // bgColor="#9C4FFF"
        className="statDiv"
        left={{ base: '-68%', md: '0', lg: '0' }}
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        position="relative"
      >
        <Flex px="1vh">
          <Flex w={{ base: '10%', md: '10%', lg: '25%' }}></Flex>
          <Flex
            w={{ base: '80%', md: '80%', lg: '50%' }}
            justifyContent="center"
          >
            <PopoverHeader
              fontWeight="semibold"
              textAlign="center"
              // marginLeft="-100px"
            >
              Update Prediction Status
            </PopoverHeader>
          </Flex>
          <Flex w={{ base: '10%', md: '10%', lg: '25%' }} justifyContent="end">
            <CloseButton
              onClick={() => setIsOpen(false)}
              color="red"
              left="60%"
              marginTop="4px"
              marginLeft="4vh"
            ></CloseButton>
          </Flex>
        </Flex>

        <PopoverBody>
          <form onSubmit={submit}>
            <FormControl>
              <FormLabel htmlFor={pred.id + '_status'} textAlign="center">
                Status
              </FormLabel>
              <RadioGroup name="status">
                <Stack direction="column">
                  {[
                    'Prediction In-Progress',
                    'Prediction Ended',
                    'Result Declared',
                    'Cancelled',
                  ].map((option, i) => {
                    return (
                      <Radio key={i} value={option}>
                        <Box
                          borderWidth="1px"
                          bgColor="purple.400"
                          p="2"
                          borderRadius="2xl"
                        >
                          {option}
                        </Box>
                      </Radio>
                    );
                  })}
                </Stack>
              </RadioGroup>
            </FormControl>
            <Center marginTop="2vh">
              <Button type="submit" bgColor="#9C4FFF">
                Submit
              </Button>
            </Center>
          </form>
        </PopoverBody>
      </Modal>
    </Popover>
  );
};

const AddNewPrediction = () => {
  const [num, setNum] = React.useState(0);
  // const { connected, connect, activeAccount } = useWallet();
  const [options, setOptions] = React.useState({});

  const submit = async (e) => {
    e.preventDefault();
    const { prediction, resultRef, start, end } = e.target.elements;

    const contract = await wallet.at(CONTRACT_ADDRESS);
    const endValue = new Date(end.value).toISOString();
    const startValue = new Date(start.value).toISOString();

    const op = await contract.methods
      .addprediction(
        endValue,
        resultRef.value,
        prediction.value,
        Object.keys(options).map((key) => options[key]),
        startValue
      )
      .send({ amount: 2 });
    await op.confirmation(1);
    alert('Prediction Created!');
  };
  return (
    <div className="parent">
      <div className="wrapper">
        <Box height="50vh" bgColor="green" display="flex" flexWrap="wrap">
          <Popover>
            <PopoverTrigger>
              <Button>Add New Prediction</Button>
            </PopoverTrigger>
            <PopoverContent
              padding="4"
              bgColor="pink"
              height="auto"
              position="relative"
            >
              <form onSubmit={submit}>
                <FormControl>
                  <FormLabel htmlFor="prediction">Prediction</FormLabel>
                  <Input name="prediction" id="prediction"></Input>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="resultRef">Result Reference</FormLabel>
                  <Input name="resultRef" id="resultRef"></Input>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="start">Start</FormLabel>
                  <Input type="datetime-local" name="start" id="start"></Input>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="end">End</FormLabel>
                  <Input type="datetime-local" name="end" id="end"></Input>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="number_options">
                    Number of Options
                  </FormLabel>
                  <Input
                    onChange={(e) => {
                      console.log(e);
                      setNum(parseInt(e.target.value) || 0);
                    }}
                    name="number_options"
                    id="number_options"
                    type="number"
                  ></Input>
                </FormControl>
                {[...Array(num).keys()].map((i) => {
                  return (
                    <FormControl
                      bgColor="red"
                      height="auto"
                      position="relative"
                    >
                      <FormLabel htmlFor={'option_' + i}>Option {i}</FormLabel>
                      <Input
                        onChange={(e) =>
                          setOptions((options) => {
                            var opt = options;
                            opt[`option_${i}`] = e.target.value;
                            return opt;
                          })
                        }
                        name={`option_${i}`}
                        id={`option_${i}`}
                      ></Input>
                    </FormControl>
                  );
                })}
                <Button type="submit">Submit</Button>
              </form>
            </PopoverContent>
          </Popover>
        </Box>
      </div>
    </div>
  );
};

export default function MyPreds() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const { predictionsArray } = React.useContext(PredictionContext);
  const { connected, connect, activeAccount } = useWallet();
  const [myPreds, setMyPreds] = React.useState([]);
  const colors = {
    bg: useColorModeValue('blue.100', 'blue.900'),
    text: useColorModeValue('blue', 'white'),
  };

  const [buttonPopup, setButtonPopup] = useState(false);
  useEffect(() => {
    (async function () {
      if (activeAccount && predictionsArray) {
        if (!connected) {
          await connect();
        }
        const contract = await wallet.at(CONTRACT_ADDRESS);
        const storage = await contract.storage();
        const admin = storage.admin;
        console.log(admin);
        if (activeAccount) {
          const _ = [];
          for (let x = 0; x < predictionsArray.length; x++) {
            let item = predictionsArray[x].value;
            if (
              item.proposer === activeAccount.address ||
              admin === activeAccount.address
            ) {
              _.push(item);
            }
          }
          console.log(_);
          setMyPreds(_);
        }
      }
    })();
  }, [activeAccount, predictionsArray]);

  return myPreds ? (
    <Container
      px={{ base: '8', md: '20', lg: '20' }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="auto"
      bgImage={portfolioBG}
      bgPosition="center"
      bgSize="cover"
      w="100%"
      maxWidth="100%"
      className="main-container"
      flexDirection="column"
      gap="10"
      py="20vh"
    >
      <Flex w="100%">
        <Heading
          className="mainfont"
          as="h2"
          fontWeight="semibold"
          fontSize={{ base: '4xl', md: '4xl', lg: '7xl' }}
          textAlign={{ base: 'center', md: 'left', lg: 'left' }}
        >
          Predictions
        </Heading>
      </Flex>
      {/* <AddNewPrediction /> */}

      {!connected ? (
        <Box
          padding="20"
          bgColor="#180F2Bed"
          borderRadius="10"
          w="40%"
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
        <Flex
          justifyContent="center"
          bgColor="#180F2Bed"
          px={{ base: '15%', md: '5%', lg: '5%' }}
          py={{ base: '13%', md: '3%', lg: '3%' }}
          borderRadius="15"
        >
          <Button
            color="white"
            bgColor="#9C4FFF"
            onClick={() => setButtonPopup(true)}
          >
            Add New Prediction
          </Button>
          <AddNewPrediction2
            trigger={buttonPopup}
            setTrigger={setButtonPopup}
          ></AddNewPrediction2>
        </Flex>
      )}

      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        // bgColor="pink"
        height="auto"
        marginTop="4vh"
        justifyContent="center"
        // alignItems="center"
      >
        <Box className="App">
          {/* <button onClick={() => setIsOpen(true)}>Open Modal</button> */}
          <Modal
            bgColor="red"
            isOpen={modalIsOpen}
            onRequestClose={() => setIsOpen(false)}
            w="50%"
          >
            <Button
              onClick={() => setIsOpen(false)}
              color="red"
              _focus={{ boxShadow: 'none' }}
            >
              Close Modal
            </Button>
          </Modal>
        </Box>

        {myPreds.map((pred, i) => {
          return (
            <Box
              key={i}
              // onClick={}
              display="flex"
              maxWidth="300px"
              // border="1px solid"
              borderRadius="15px"
              padding="30px"
              margin="10px"
              bgColor="#180F2B"
            >
              <Text color="white">{pred.predictionName}</Text>
              <UpdatePredStatus pred={pred} />
              <AddPredRes pred={pred} />
            </Box>
          );
        })}
      </Box>
    </Container>
  ) : (
    <Loading />
  );
}

const Portfolio = () => {
  //const { isOpen, onOpen, onClose } = useDisclosure();
  const colors = {
    bg: useColorModeValue('blue.100', 'blue.900'),
    text: useColorModeValue('blue', 'white'),
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
            ledger.push({ id: tokens[tokenId], balance: value.toString() });
          })
          .catch((error) =>
            console.log(`Error: ${tokens[tokenId]} ${activeAccount.address}`)
          );
        console.log(ledger);
      }

      setData(ledger);
    }
  }, [activeAccount]);
  return data ? (
    <Container
      width="auto"
      maxWidth="100vw"
      bg={colors.bg}
      height="auto"
      maxHeight="100vh"
      padding="10vh"
    >
      <Text color={colors.text}>Portfolio</Text>
      <Box display="flex" flexDirection="column" flexWrap="wrap">
        {data.map((pred, i) => {
          return (
            <Box
              key={i}
              // onClick={}
              display="flex"
              maxWidth="300px"
              flexDirection="row"
              border="1px solid"
              borderRadius="15px"
              padding="20px"
              margin="10px"
            >
              <Text color={colors.text}>
                Token id &nbsp;: &nbsp; {pred.id} &nbsp;
              </Text>
              <Text color={colors.text}>
                Balance &nbsp; :&nbsp; {pred.balance}
              </Text>
            </Box>
          );
        })}
      </Box>
    </Container>
  ) : (
    <Loading />
  );
};

const AddNewPrediction2 = (props) => {
  const [num, setNum] = React.useState(0);
  // const { connected, connect, activeAccount } = useWallet();
  const [options, setOptions] = React.useState({});

  const submit = async (e) => {
    e.preventDefault();
    const { prediction, resultRef, start, end } = e.target.elements;

    const contract = await wallet.at(CONTRACT_ADDRESS);
    const endValue = new Date(end.value).toISOString();
    const startValue = new Date(start.value).toISOString();

    const op = await contract.methods
      .addprediction(
        endValue,
        resultRef.value,
        prediction.value,
        Object.keys(options).map((key) => options[key]),
        startValue
      )
      .send({ amount: 2 });
    await op.confirmation(1);
    alert('Prediction Created!');
  };

  return props.trigger ? (
    <Box className="popup">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        className="popup-inner"
        flexDirection="column"
      >
        <Flex
          // bgColor="green"
          justifyContent="end"
          // bgColor="pink"
          w="100%"
        >
          <CloseButton
            bgColor="#383838"
            className="close-btn"
            color="red"
            onClick={() => props.setTrigger(false)}
            textAlign="right"
            fontSize="xl"
            _focus={{ boxShadow: 'none', outline: 'none' }}
            // marginLeft="-10px"
          ></CloseButton>
        </Flex>

        <Box
          w="100%"
          height="100%"
          display="flex"
          justifyContent="center"
          // bgColor="yellow"
          paddingTop="12vh"
        >
          <Popover bgColor="red">
            <PopoverTrigger>
              <Flex
                bgColor="#180F2B"
                height="20vh"
                alignItems="center"
                w={{ base: '100%', md: '30%', lg: '30%' }}
                justifyContent="center"
                borderRadius="15"
                px={{ base: '15%', md: '5%', lg: '5%' }}
                py={{ base: '13%', md: '3%', lg: '3%' }}
              >
                <Button bgColor="#9C4FFF" color="white">
                  Add New Predictions
                </Button>
              </Flex>
            </PopoverTrigger>
            <PopoverContent
              padding="4"
              bgColor="#9C4FFF"
              height="auto"
              position="relative"
              marginTop="-6vh"
            >
              <form onSubmit={submit}>
                <FormControl>
                  <FormLabel htmlFor="prediction">Prediction</FormLabel>
                  <Input name="prediction" id="prediction"></Input>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="resultRef">Result Reference</FormLabel>
                  <Input name="resultRef" id="resultRef"></Input>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="start">Start</FormLabel>
                  <Input type="datetime-local" name="start" id="start"></Input>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="end">End</FormLabel>
                  <Input type="datetime-local" name="end" id="end"></Input>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="number_options">
                    Number of Options
                  </FormLabel>
                  <Input
                    onChange={(e) => {
                      console.log(e);
                      setNum(parseInt(e.target.value) || 0);
                    }}
                    name="number_options"
                    id="number_options"
                    type="number"
                  ></Input>
                </FormControl>
                {[...Array(num).keys()].map((i) => {
                  return (
                    <FormControl height="auto" position="relative">
                      <FormLabel htmlFor={'option_' + i}>Option {i}</FormLabel>
                      <Input
                        onChange={(e) =>
                          setOptions((options) => {
                            var opt = options;
                            opt[`option_${i}`] = e.target.value;
                            return opt;
                          })
                        }
                        name={`option_${i}`}
                        id={`option_${i}`}
                      ></Input>
                    </FormControl>
                  );
                })}
                <Center marginTop="2vh">
                  <Button type="submit" bgColor="#180F2B" marginTop="10px">
                    Submit
                  </Button>
                </Center>
              </form>
            </PopoverContent>
          </Popover>
        </Box>
      </Box>
    </Box>
  ) : (
    ''
  );
};
