import { SearchIcon } from '@chakra-ui/icons';
import {
  Box, Flex, Input, InputGroup, InputLeftElement, Text,
} from '@chakra-ui/react';
import './App.css';
import ResultList from './components/ResultList';
import SearchBar from './components/SearchBar'

function App() {
  return (
    <>
      <Box w="100%" minH="100vh">
        <Flex
          p={4}
          align="center"
          justify="center"
          background="#6b6b7e"
        >
          <Text
            fontSize={"14px"}
            textTransform="uppercase"
            color="#FFF"
          >
            Github API Search
          </Text>
        </Flex>

        <Flex
          p={2}
          align="center"
          justify="center"
        >
          <Box w="100%">
            <SearchBar />
            <ResultList results={[]} />
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default App;
