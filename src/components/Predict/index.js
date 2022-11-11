import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  useColorModeValue,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Button,
  RadioGroup,
  Stack,
  Radio,
  NumberInput,
  NumberInputField,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  FormControl,
} from '@chakra-ui/react';
import PredictionContext from '../../helper/PredictionContext';
import { useParams } from 'react-router-dom';
import Loading from '../../helper/Loading';
import { CONTRACT_ADDRESS, wallet } from '../../helper/tezos';
import { char2Bytes, bytes2Char } from '@taquito/utils'
import heroPurple from '../assets/Homepage-bg-purple.png';
import './index.css';

const BuySellWindow = ({ id, options }) => {
  const [request, setRequest] = React.useState({
    option: options[0],
    quantity: 0,
  });

  const buySubmit = async (e) => {
    e.preventDefault();
    const { option, quantity } = e.target.elements;

    const contract = await wallet.at(CONTRACT_ADDRESS);
    id = Number(id);

    const op = await contract.methods.voteOnprediction(id, option.value).send();

    await op.confirmation(1);
    alert('Transaction Completed!');
  };

  return (
    <Tabs variant="soft-rounded" width="100%" padding="0" margin="0">
      {/* <TabList>
        <Tab>Options</Tab>
      </TabList> */}
      <TabPanels padding="0" margin="0">
        <TabPanel padding="0" margin="0">
          <form onSubmit={buySubmit}>
            <Container
              display="flex"
              flexDirection="column"
              padding="0"
              margin="0"
              // borderColor="green"
              class="options"
              w="100%"
              bgColor="red"
            >
              <Box padding="0" margin="0">
                <Text fontWeight="bold" fontSize="md" py="2">
                  Pick an option
                </Text>
                <RadioGroup
                  onChange={(e) =>
                    setRequest((request) => {
                      return {
                        ...request,
                        option: e,
                      };
                    })
                  }
                  value={request.option}
                  name="option"
                  display="flex"
                  // bgColor="red"
                  flexDirection="column"
                >
                  <Stack
                    display="flex"
                    direction={{ base: 'column', md: 'row', lg: 'row' }}
                    justifyContent="space-between"
                    // bgColor="pink"
                    marginTop="2vh"
                    w="500px"
                  >
                    {options.map((option, i) => {
                      return (
                        <Radio key={i} value={option} w="100%">
                          <Box
                            borderWidth="1px"
                            borderColor="gray.400"
                            py="2"
                            px="5"
                            bgColor="#9C4FFF"
                            w="100%"
                            borderRadius="2xl"
                          >
                            {option}
                          </Box>
                        </Radio>
                      );
                    })}
                  </Stack>
                </RadioGroup>
              </Box>
              <Box>
                <Button w="100%" bgColor="#9C4FFF" type="submit">
                  Vote
                </Button>
              </Box>
            </Container>
          </form>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default function Predict() {
  let { id } = useParams();
  console.log('ID ', id);
  id = id.toString();
  const { predictions } = React.useContext(PredictionContext);
  const [data, setData] = React.useState(null);
  const colors = {
    bg: useColorModeValue('blue.100', 'blue.900'),
    text: useColorModeValue('blue', 'white'),
    border: useColorModeValue('purple.900', 'purple.100'),
    cardBg: useColorModeValue('blue.200', 'blue.700'),
  };

  React.useEffect(async () => {
    if (predictions) {
      const _ = await predictions.get(id).then((value) => {
        return value;
      });
      const contract = await wallet.at(CONTRACT_ADDRESS);
      const storage = await contract.storage();
      const snapshot = await storage.voteSnapshot.get(id).then(value => {return value});
       
      const snapshotList = [];

      for (let pred of snapshot.keys()) {
			if (pred != 'Total') {			  
		  snapshotList.push({ id: pred, value: (Math.round(snapshot.get(pred) * 100 / snapshot.get('Total'))).toString() }); }
		  
        console.log(snapshotList);
      }

      let volume = (snapshot.get('Total')).toString();
      console.log('volume :', volume);

      setData({
      prediction:bytes2Char( _.news),
      key: id,
      ref: _.pID.toString(),
	  newsRef : _.newsRef,
      pstatus: _.voteStatus,
	  quorum : _.quorumRequired.toString(),
	  result : _.finalResult,
      options: _.voteOptions,
	  snap : snapshotList,
	  Volume : volume,

      disclosure:
        "Predictor is for informational and educational purposes only. We take no custody of anyone's money or cryptocurrency. Read this <a href = 'https://medium.com/@karthi1908/predictor-d01e6c67de0e/'> article<\a> to understand how to predict. Predictor displays existing markets live on the Tezos blockchain and is a graphical user interface for both visualizing data and market trends from on-chain activity, and interacting with said smart contracts directly via your Web 3 enabled wallet.",
     });
    }
  }, [predictions]);

  return data ? (
    <Container
      maxWidth="100vw"
      width="auto"
      bgGradient="linear(to-r, #25203a, #181125)"
      height="auto"
      bgImage={heroPurple}
      bgPosition="center"
      bgSize="cover"
      display="flex"
      flexDir="column"
      justifyContent="center"
      px={{ base: '7%', md: '15%', lg: '15%' }}
      py={{ base: '10', md: '20', lg: '20' }}
    >
      <Accordion allowToggle margin="6" className="accordion">
        <AccordionItem
          bgColor="#9C4FFF"
          className="accordion"
          borderRadius="10"
          cursor="none"
        >
          <h2>
            <AccordionButton className="accordion">
              <Box flex="1">Please Read this before making any purchases</Box>
            </AccordionButton>
          </h2>
          <AccordionPanel p="6">{data.disclosure}</AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Box bgColor="#180F2B" borderRadius="20">
        <Box
          p="6"
          borderRadius="lg"
          overflow="hidden"
          display="flex"
          flexDirection={{ base: 'column', md: 'column', lg: 'column' }}
          flexWrap="wrap"
          w="100%"
          gap="5"
        >
          <Flex w={{ base: '100%', md: '30%', lg: '30%' }}>
            <Text fontSize="lg">Prediction id: {data.ref} </Text>
          </Flex>

          <Flex w={{ base: '100%', md: '30%', lg: '30%' }}>
            <Text fontSize="lg">Reference:{data.newsRef} </Text>
          </Flex>

          <Flex
            w={{ base: '100%', md: '70%', lg: '70%' }}
            flexDirection="column"
            gap="5"
          >
            <Text
              fontSize="lg"
              fontWeight="bold"
              margin={{ base: '1', md: '1' }}
              maxWidth="lg"
              overflow="visible"
              textOverflow="clip"
              color="#CEB0F5"
            >
              {data.prediction}
            </Text>
            <Flex flexDirection="row" w="100%" justifyContent="space-between">
              <Flex w="50%">
                <Text fontSize="sm">Threshold Votes : </Text>
                <Text fontSize="sm"> {data.quorum}</Text>
              </Flex>

              <Flex w="50%">
                <Text fontSize="sm">Result : </Text>
                <Text fontSize="sm"> {data.result}</Text>
              </Flex>
            </Flex>

            <Flex py="3">
              <Text fontSize="sm">Status :</Text>
              <Text fontSize="sm">{data.pstatus}</Text>
            </Flex>
          </Flex>
        </Box>

        <Flex flexDirection="column" padding="5" w="100%">
          <Box className="mid" py="5">
            <Text fontSize="lg">Volume :</Text>

            <Flex
              flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
              marginTop="2vh"
              gap="3"
            >
              <Flex>
                <Text color="white">Total Votes:</Text>
                <Text color="white">{data.Volume}</Text>
              </Flex>

              {data.snap.map((pred, i) => {
                return (
                  <Flex
                    flexDirection="row"
                    px={{ base: '0', md: '7', lg: '7' }}
                  >
                    <Box display="flex">
                      <Text>{pred.id} : </Text>
                    </Box>

                    <Box display="flex">
                      <Text>{pred.value} %</Text>
                    </Box>
                  </Flex>
                );
              })}
            </Flex>
          </Box>
        </Flex>

        <Box
          margin="6"
          maxW="max-content"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
        >
          <BuySellWindow id={id} options={data.options} />
        </Box>
      </Box>
    </Container>
  ) : (
    <Loading />
  );
}
