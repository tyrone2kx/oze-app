import { SearchIcon } from '@chakra-ui/icons'
import { Box, Input, InputGroup, InputLeftElement, Flex } from '@chakra-ui/react'
import React from 'react'

const SearchBar = () => {
    return (
        <Flex
            align="center"
            justify="center"
            mt={8}
        >
            <Box w={{ base: "100%", md: "50%" }}>
                <InputGroup
                >
                    <InputLeftElement
                        pointerEvents='none'
                        children={<SearchIcon color='gray.300' />}
                    />
                    <Input
                        border="1px solid #999" type='tel' placeholder='Phone number'
                        focusBorderColor="#999"
                    />
                </InputGroup>
            </Box>
        </Flex>
    )
}

export default SearchBar