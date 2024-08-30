import { GridItem, Input, InputGroup, Button, IconButton, HStack, Flex, useBreakpointValue, InputLeftElement, Divider, Checkbox, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import { ChangeEvent, Dispatch } from 'react'
import { Action } from '@/hooks/useFilter'


const singleColumn = { base: 1, md: 2, lg: 3 }

export const ResponsiveSearchBar = (
    { queryValue, locationValue, fullTimeOnly, dispatch, mobile__handleOpenFilterModal }:
        {
            queryValue                   : string,
            locationValue                : string,
            fullTimeOnly                 : boolean,
            dispatch                     : Dispatch<Action>
            mobile__handleOpenFilterModal: () => void
        }
) => {

    const background = useColorModeValue('white', 'dark.blue')
    const inputColor = useColorModeValue('dark.blue', 'white')

    const variant = useBreakpointValue({
        base: 'mobile',
        md  : 'tablet',
        lg  : 'desktop'
    })

    const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'SET_QUERY', payload: event.target.value })
    }

    const handleLocationChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'SET_LOCATION', payload: event.target.value })
    }

    const handleFullTimeOnlyChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'SET_FULLTIME_ONLY', payload: event.target.checked })
    }

    const handleFilter = () => {
        dispatch({ type: 'FILTER' })
    }

    return (
        <>
            {variant === 'mobile' && (
                <GridItem colSpan={singleColumn} bg={background} h='80px' borderRadius='6px'>
                    <HStack h='100%' pr='1em'>
                        <Input
                            border        = 'none'
                            placeholder   = 'Filter by title...'
                            _focusVisible = {{ border: 'none' }}
                            value         = {queryValue}
                            onChange      = {handleQueryChange}
                            color         = {inputColor}
                        />
                        <Image
                            src     = 'assets/filter.svg'
                            alt     = ''
                            width   = {20}
                            height  = {20}
                            onClick = {mobile__handleOpenFilterModal}
                        />
                        <IconButton
                            aria-label = 'Search'
                            bg         = 'violet.medium'
                            _hover     = {{ bg: 'violet.light' }}
                            ml         = '1em'
                            icon={
                                <Image
                                    src    = 'assets/search.svg'
                                    alt    = ''
                                    width  = {20}
                                    height = {20}
                                />
                            }
                            onClick={handleFilter}
                        />
                    </HStack>
                </GridItem>
            )}

            {variant === 'tablet' && (
                <GridItem colSpan={singleColumn} bg={background} h='80px' borderRadius='6px'>
                    <Flex w='100%' h='100%' alignItems='center' px='1em' gap='1em'>

                        <InputGroup flex='1'>
                            <InputLeftElement>
                                <Image
                                    src    = 'assets/search2.svg'
                                    alt    = ''
                                    width  = {24}
                                    height = {24}
                                />
                            </InputLeftElement>
                            <Input
                                placeholder   = 'Filter by title...'
                                border        = 'none'
                                _focusVisible = {{ border: 'none' }}
                                value         = {queryValue}
                                onChange      = {handleQueryChange}
                                color         = {inputColor}
                            />
                        </InputGroup>

                        <Divider orientation='vertical' />

                        <InputGroup flex='1'>
                            <InputLeftElement>
                                <Image
                                    src    = 'assets/location.svg'
                                    alt    = ''
                                    width  = {17}
                                    height = {24}
                                />
                            </InputLeftElement>
                            <Input
                                placeholder   = 'Filter by location...'
                                border        = 'none'
                                _focusVisible = {{ border: 'none' }}
                                value         = {locationValue}
                                onChange      = {handleLocationChange}
                                color         = {inputColor}
                            />
                        </InputGroup>

                        <Divider orientation='vertical' />

                        <HStack flex='1' justifyContent='space-between'>
                            <Checkbox isChecked={fullTimeOnly} onChange={handleFullTimeOnlyChange}>
                                Full Time
                            </Checkbox>
                            <Button variant='primary' w='80px'>
                                Search
                            </Button>
                        </HStack>

                    </Flex>
                </GridItem >
            )}

            {variant === 'desktop' && (
                <GridItem colSpan={singleColumn} bg={background} h='80px' borderRadius='6px'>
                    <Flex w='100%' h='100%' alignItems='center' px='1em' gap='1em'>

                        <InputGroup flex='1'>
                            <InputLeftElement>
                                <Image
                                    src    = 'assets/search2.svg'
                                    alt    = ''
                                    width  = {24}
                                    height = {24}
                                />
                            </InputLeftElement>
                            <Input
                                placeholder   = 'Filter by title, companies, expertise...'
                                border        = 'none'
                                _focusVisible = {{ border: 'none' }}
                                value         = {queryValue}
                                onChange      = {handleQueryChange}
                                color         = {inputColor}
                            />
                        </InputGroup>

                        <Divider orientation='vertical' />

                        <InputGroup flex='1'>
                            <InputLeftElement>
                                <Image
                                    src    = 'assets/location.svg'
                                    alt    = ''
                                    width  = {17}
                                    height = {24}
                                />
                            </InputLeftElement>
                            <Input
                                placeholder   = 'Filter by location...'
                                border        = 'none'
                                _focusVisible = {{ border: 'none' }}
                                value         = {locationValue}
                                onChange      = {handleLocationChange}
                                color         = {inputColor}
                            />
                        </InputGroup>

                        <Divider orientation='vertical' />

                        <HStack flex='1' justifyContent='space-between'>
                            <Checkbox isChecked={fullTimeOnly} onChange={handleFullTimeOnlyChange}>
                                Full Time Only
                            </Checkbox>
                            <Button variant='primary' onClick={handleFilter}>
                                Search
                            </Button>
                        </HStack>

                    </Flex>
                </GridItem >
            )}
        </>
    )
}