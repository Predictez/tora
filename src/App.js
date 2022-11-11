import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from 'react-router-dom';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import Predict from './components/Predict';
import './App.css';
import Home from './components/Home';
import { char2Bytes, bytes2Char } from '@taquito/utils'
import { ContractProvider, CONTRACT_ADDRESS } from './helper/tezos';
import PredictionContext from './helper/PredictionContext';
import Loading from './helper/Loading';
import MyPreds from './components/Mypreds';
import Redeem from './components/Redeem/redeem';
import Portfolio from './components/Portfolio/Portfolio';
import Whitelistme from './components/Whitelist/Whitelist';
import Privacy from './page/Privacy/Privacy';
import Contact from './page/Contact/Contact';
import FAQ from './page/FAQ/FAQ';
import Blogs from './page/Blogs/Blogs';
import BlogContent from './page/Blogs/BlogContent';
import Terms from './page/Terms/Terms';
import How from './page/How/How';

function App() {
  const [predictions, setPredictions] = React.useState(null);
  const [predictionsArray, setPredictionsArray] = React.useState([]);
  const updatePredictions = (preds, predArray) => {
    setPredictions(preds);
    setPredictionsArray(predArray);
  };
  const { id } = useParams();

  React.useEffect(() => {
    ContractProvider.at(CONTRACT_ADDRESS).then(async (contract) => {
      const storage = await contract.storage();
      const predictions = storage.predictions;
      const counter = storage.pCounter.toString();
      const predList = [];
      // for (let key of storage.predictTokenDetails.keys()) {
      //   console.log(key);
      //   console.log(storage.predictTokenDetails.get(key));
      // }
      for (let pred = 1; pred < counter; pred++) {
         await predictions.get(pred).then(value => { predList.push({ id: pred, 
								news : bytes2Char(value.news), 
								finalResult : value.finalResult, 
								newsRef : value.newsRef,
								pID : value.pID.toString(),
								quorumRequired : value.quorumRequired.toString(),
								rewards : value.rewards.toString(),
								source : value.source,
								voteOptions : value.voteOptions,
								voteStatus : value.voteStatus }) });
								
		
      }
      updatePredictions(predictions, predList);
    });
  }, []);

  return (
    <ChakraProvider>
      <ColorModeProvider
        options={{
          initialColorMode: 'dark',
          useSystemColorMode: true,
        }}
      >
        <>
          <PredictionContext.Provider
            value={{
              predictions,
              predictionsArray,
              updatePredictions,
            }}
          >
            <Router>
              <Header />
              <Routes>
                <Route exact path="/" element={<Home />} />

                <Route path="/predict/:id" element={<Predict />} />

                <Route path="/mypreds" element={<MyPreds />} />
                <Route path="/Portfolio" element={<Portfolio />} />
                <Route path="/Privacy" element={<Privacy />} />

                <Route path="/Contact" element={<Contact />} />
                <Route path="/redeem" element={<Redeem />} />
                <Route path="/FAQ" element={<FAQ />} />
                <Route path="/Blogs" element={<Blogs />} />
                <Route path="/Terms" element={<Terms />} />
                <Route path="/Whitelist" element={<Whitelistme />} />

                <Route path="/BlogContent" element={<BlogContent />} />

                <Route path="/How" element={<How />} />
              </Routes>
            </Router>
          </PredictionContext.Provider>
        </>
      </ColorModeProvider>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
