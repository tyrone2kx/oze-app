import React from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react';
// @ts-ignore
import empty from '../assets/empty.png';



const EmptyState = () => {
    return (
        <Flex mt={4} w="100%" h="100%" justify={"center"}>
            <Box>
                <Image h="200px" src={empty} />
                <Text fontWeight={"bold"} textAlign={"center"}>
                    No User Found.
                </Text>
            </Box>
        </Flex>
    )
}

export default EmptyState