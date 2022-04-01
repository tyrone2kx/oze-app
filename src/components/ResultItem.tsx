import React, { useState } from 'react'
import { SearchIcon } from '@chakra-ui/icons'
import { Box, Text, Avatar, Flex } from '@chakra-ui/react'

interface IProps {
    results: any[]
}

const ResultItem = () => {

    const [showMoreInfo, setShowMoreInfo] = useState<boolean>(false)
    const [truncated, setTruncated] = useState<boolean>(true)

    return (
        <Flex
            direction={"column"}
            align="center"
            p={2}
            py={4}
            borderRadius="10px"
            border="1px solid"
            borderColor={"#E4E9F2"}
            maxW={{ base: "47%", md: "300px" }}
            m={1}
            transition=".2s ease"
            _hover={{
                borderColor: "#000"
            }}
            onClick={() => {
                setShowMoreInfo(true)
                setTruncated(false)
            }}
            onMouseEnter={() => {
                setShowMoreInfo(true)
                setTruncated(false)
            }}
            onMouseLeave={() => {
                setShowMoreInfo(false)
                setTruncated(true)
            }}
            
        >
            <Avatar
                name='Kent Dodds'
                src='https://bit.ly/kent-c-dodds'
                size={"xl"}
            />

            <Box mt={2} w="100%">
                <Text fontSize={"14px"} textAlign="center" isTruncated={truncated}>
                    Prosper Chukwudaluada
                </Text>

                <Box mt={2} h="40px">
                    {showMoreInfo &&
                        <>
                            <Text color="#666" fontSize={"12px"} textAlign="center">
                                Score: 0.1
                            </Text>
                            <Text cursor="pointer" color="#666" fontSize={"12px"} textAlign="center">
                                View Profile
                            </Text>
                        </>
                    }
                </Box>
            </Box>
        </Flex>
    )
}

export default ResultItem