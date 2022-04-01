import {
  Box, Flex, Text,
} from '@chakra-ui/react';
import './App.css';
import Loader from './components/Loader';
import ResultList from './components/ResultList';
import SearchBar from './components/SearchBar'
import useApiSearch from './hooks/useApiSearch';

function App() {

  const {
    searchText,
    searchResults,
    loading,
    page,
    setPage,
    setSearchText,
    showPaginationButton,
    setIsPageChange,
    isPageChange
  } = useApiSearch()

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
            <SearchBar
              value={searchText}
              onChange={(text: string) => {
                setIsPageChange(false)
                setSearchText(text)
              }}
            />

            {(loading && !isPageChange) ? <Loader />
              :
              <ResultList
                showEmptyState={searchText.length > 0 && !loading}
                results={searchResults}
                loading={loading}
                showButton={showPaginationButton}
                loadMoreResults={() => {
                  setIsPageChange(true)
                  setPage(page + 1)
                }}
              />}
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default App;
