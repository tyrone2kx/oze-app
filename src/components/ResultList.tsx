import { SearchIcon } from '@chakra-ui/icons'
import { Box, Text, Avatar, Flex } from '@chakra-ui/react'
import React from 'react'
import ResultItem from './ResultItem'

interface IProps {
    results: any[]
}

const ResultList = ({ results }: IProps) => {
    return (
        <Flex
            align="center"
            justify="center"
            mt={8}
        >
            <Flex
                wrap={"wrap"}
                justify={{base: "space-evenly", md: "flex-start"}}
                w={{ base: "100%", md: "50%" }}
            >
                <ResultItem />
                <ResultItem />
                <ResultItem />
                <ResultItem />
                <ResultItem />
            </Flex>
        </Flex>
    )
}

export default ResultList