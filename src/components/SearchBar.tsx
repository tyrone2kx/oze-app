import { SearchIcon } from '@chakra-ui/icons'
import { Box, Input, InputGroup, InputLeftElement, Flex } from '@chakra-ui/react'
import React from 'react'


interface IProps {
    value: string,
    onChange: (text: string) => void
}


const SearchBar = ({ value, onChange }: IProps) => {
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
                        border="1px solid #999" 
                        placeholder='Start typing...'
                        focusBorderColor="#999"
                        value={value}
                        onChange={e => {
                            onChange(e.target.value)
                        }}
                    />
                </InputGroup>
            </Box>
        </Flex>
    )
}

export default SearchBar