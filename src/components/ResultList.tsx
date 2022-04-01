import { Flex, Button } from '@chakra-ui/react'
import React from 'react'
import { IResult } from '../hooks/useApiSearch'
import EmptyState from './EmptyState'
import ResultItem from './ResultItem'

interface IProps {
    results: IResult[],
    showButton: boolean,
    loadMoreResults: () => void,
    loading: boolean,
    showEmptyState: boolean,
}

const ResultList = ({ results, showButton, loadMoreResults, loading, showEmptyState }: IProps) => {
    return (
        <>
            <Flex
                align="center"
                justify="center"
                my={8}
            >
                <Flex
                    wrap={"wrap"}
                    justify={{ base: "space-evenly", md: "flex-start" }}
                    w={{ base: "100%", md: "50%" }}
                >
                    {results.length > 0 ? results.map(user => (
                        <ResultItem
                            key={user.id}
                            name={user.login}
                            profilePic={user.avatar_url}
                            score={user.score}
                            url={user.url}
                        />
                    ))

                        : (showEmptyState && <EmptyState />)
                    }
                </Flex>
            </Flex>
            {showButton &&
                <Flex my={5} justify={"center"}>
                    <Button isLoading={loading} onClick={loadMoreResults} >
                        Load More Results
                    </Button>
                </Flex>}
        </>
    )
}

export default ResultList