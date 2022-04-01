import React, { useState } from 'react'
import { ExternalLinkIcon, SearchIcon } from '@chakra-ui/icons'
import { Box, Text, Avatar, Flex, Link } from '@chakra-ui/react'

interface IProps {
    name: string,
    profilePic: string,
    url: string,
    score: number,
}

const ResultItem = ({ name, profilePic, score, url }: IProps) => {

    const [showMoreInfo, setShowMoreInfo] = useState<boolean>(false)
    const [truncated, setTruncated] = useState<boolean>(true)

    return (
        <Flex
            direction={"column"}
            align="center"
            w={{ base: "47%", md: "300px" }}
            m={1}
            p={2}
            py={4}
            borderRadius="10px"
            border="1px solid"
            borderColor={"#E4E9F2"}
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
                name={name}
                src={profilePic}
                size={"xl"}
            />

            <Box mt={2} w="100%">
                <Text fontSize={"14px"} textAlign="center" isTruncated={truncated}>
                    {name}
                </Text>

                <Box mt={2} h="40px">
                    {showMoreInfo &&
                        <>
                            <Text color="#666" fontSize={"12px"} textAlign="center">
                                Score: {score}
                            </Text>
                            <Text cursor="pointer" color="#666" fontSize={"12px"} textAlign="center">
                                <Link target={"_blank"} href={url}>
                                    View Profile <ExternalLinkIcon mx="2px" />
                                </Link>
                            </Text>
                        </>
                    }
                </Box>
            </Box>
        </Flex>
    )
}

export default ResultItem