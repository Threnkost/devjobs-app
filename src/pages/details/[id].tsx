import { Box, Button, Center, Flex, HStack, Heading, Image, ListItem, OrderedList, Text, UnorderedList, VStack, useBreakpointValue, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { GetServerSideProps, NextPage } from 'next'
import { Company } from '@/types/company'
import { createContext, useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { fetchData } from '@/utils/fetchData'
import { Pattern } from '@/components/Pattern'
import { ThemeToggleButton } from '@/components/ThemeToggleButton'

const inline = { mx: { base: '24px', md: '40px', lg: 'auto' }, w: { base: 'auto', lg: 'min(100%, 730px)' } }


export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.params as { id: string }

    const data = fetchData()
    return {
        props: {
            data: data[Number(id) - 1],
        },
    }
}

const PageContext = createContext<Company | undefined>(undefined)


const _ResponsiveHeader = () => {

    const background      = useColorModeValue('white', 'dark.midnight')
    const titleColor      = useColorModeValue('dark.blue', 'white')
    const buttonTextColor = useColorModeValue('violet.medium', 'white')
    const buttonBgColor   = useColorModeValue('#EFF0FC', '#303642')

    const router = useRouter()

    const variant = useBreakpointValue({
        base: 'mobile',
        md  : 'tablet',
        lg  : 'desktop'
    })

    const pageContext = useContext(PageContext)

    const handleCompanySite = () => {
        router.push(pageContext?.website || '#')
    }

    return (
        <>
            {variant === 'mobile'
                ? (
                    <Box h='205px' bg={background} borderRadius='6px' mt='25px' {...inline}>
                        <Center flexDirection='column' gap='24px' mt='-25px'>
                            <Center w='50px' h='50px' borderRadius='15px' bg={pageContext?.logoBackground}>
                                <Image
                                    src           = {`/logos/${pageContext?.logo}`}
                                    alt           = ''
                                    userSelect    = 'none'
                                    pointerEvents = 'none'
                                />
                            </Center>
                            <VStack spacing='12px'>
                                <Heading size='lg' color={titleColor}>
                                    {pageContext?.company}
                                </Heading>
                                <Link href={pageContext?.website || ''}>
                                    <Text color='gray.dark'>
                                        {pageContext?.website}
                                    </Text>
                                </Link>
                            </VStack>
                            {
                                <Button px='1.25em' onClick={handleCompanySite} color={buttonTextColor} bg={buttonBgColor}>
                                    Company Site
                                </Button>
                            }
                        </Center>
                    </Box>
                )
                : (
                    <Flex {...inline} bg={background} borderRadius='6px' justifyContent='space-between' alignItems='center'>
                        <HStack spacing='40px'>
                            <Center
                                w            = '140px'
                                h            = '140px'
                                borderRadius = '6px 0 0 6px'
                                bg           = {pageContext?.logoBackground}
                                _hover       = {{
                                    cursor       : 'pointer',
                                    '&:hover img': {
                                        transform: 'scale(2.2)',
                                    }
                                }}
                                onClick = {handleCompanySite}
                            >
                                <Image
                                    src        = {`/logos/${pageContext?.logo}`}
                                    alt        = ''
                                    w          = 'auto'
                                    h          = 'auto'
                                    transform  = 'scale(2)'
                                    transition = 'transform 0.2s ease-out'
                                />
                            </Center>
                            <VStack alignItems='flex-start'>
                                <Heading size='lg' color={titleColor}>
                                    {pageContext?.company}
                                </Heading>
                                <Link href={pageContext?.website || ''}>
                                    <Text color='gray.dark'>
                                        {pageContext?.website}
                                    </Text>
                                </Link>
                            </VStack>
                        </HStack>
                        {
                            <Button mr='2em' px='1.25em' onClick={handleCompanySite} color={buttonTextColor} bg={buttonBgColor}>
                                Company Site
                            </Button>
                        }
                    </Flex>
                )
            }
        </>
    )
}


const _ResponsiveFooter = () => {

    const background = useColorModeValue('white', 'dark.midnight')
    const titleColor = useColorModeValue('dark.blue', 'white')

    const variant = useBreakpointValue({
        base: 'mobile',
        md: 'tablet',
        lg: 'desktop'
    })

    const router = useRouter()
    const pageContext = useContext(PageContext)

    const handleApply = () => {
        router.push(pageContext?.apply || '#')
    }

    return (
        <Center w='max(100%, 320px)' px={{ base: '24px', lg: '0' }} h='96px' bg={background} position='absolute' bottom='0'>
            {
                variant === 'mobile'
                    ? (
                        <Button variant='primary' w='100%' h='50%' onClick={handleApply}>
                            Apply Now
                        </Button>
                    )
                    : (
                        <Flex w='min(100%, 730px)' justifyContent='space-between' alignItems='center'>
                            <VStack alignItems='flex-start'>
                                <Heading size='md' color={titleColor}>
                                    {pageContext?.position}
                                </Heading>
                                <Text color='gray.dark'>
                                    {pageContext?.company}
                                </Text>
                            </VStack>
                            <Button variant='primary' h='48px' onClick={handleApply}>
                                Apply Now
                            </Button>
                        </Flex>
                    )
            }
        </Center>
    )
}


const Detail: NextPage<{ data: Company | undefined }> = ({ data }) => {

    const backgroundColor = useColorModeValue('gray.light', 'dark.blue')
    const cardBgColor = useColorModeValue('white', 'dark.midnight')
    const titleColor = useColorModeValue('dark.blue', 'white')

    const router = useRouter()

    const handleApply = () => {
        router.push(data?.apply || '')
    }

    const handleBack = () => {
        router.push('/')
    }

    return (
        <PageContext.Provider value={data}>
            <Box
                w='max(100%, 320px)'
                minH='100vh'
                bg={backgroundColor}
                pt={{ base: '32px', md: '42px', lg: '44px' }}
                pb='calc(4em + 96px)'
            >
                <Pattern />

                <Flex direction='column' gap='24px' w='100%' position='relative' zIndex='1' mx='auto'>
                    <Box {...inline} w={{ lg: 'min(90%, 1110px)' }} mb='8px' display='flex' justifyContent='space-between'>
                        <Image
                            src='/assets/devjobs.svg'
                            alt=''
                            w='115px'
                            h='32px'
                            userSelect='none'
                            cursor='pointer'
                            onClick={handleBack}
                            transition='transform 200ms ease'
                            _hover={{
                                transform: 'scale(1.1)'
                            }}
                        />
                        <ThemeToggleButton />
                    </Box>

                    <_ResponsiveHeader />

                    <Box bg={cardBgColor} borderRadius='6px' py='2em' pb='3em' px={{ base: '1.5em', md: '2em' }} {...inline} >
                        <Flex
                            direction={{ base: 'column', md: 'row' }}
                            alignItems={{ base: 'flex-start', md: 'center' }}
                            justifyContent='space-between'
                            mb='32px'
                        >
                            <VStack alignItems='flex-start'>
                                <HStack>
                                    <Text color='gray.dark'>{data?.postedAt}</Text>
                                    <Box w='4px' h='4px' borderRadius='full' bg='gray.dark' />
                                    <Text color='gray.dark'>{data?.contract}</Text>
                                </HStack>
                                <Heading size='md' color={titleColor}>
                                    {data?.position}
                                </Heading>
                                <Heading size='xs' color='violet.medium'>
                                    {data?.location}
                                </Heading>
                            </VStack>
                            <Button variant='primary' w={{ base: '100%', md: 'auto' }} mt={{ base: '50px', md: '0' }} px={{ md: '1.75em' }} onClick={handleApply}>
                                Apply Now
                            </Button>
                        </Flex>
                        <Text color='gray.dark'>
                            {data?.description}
                        </Text>

                        <Heading size='md' mt='64px' color={titleColor}>
                            Requirements
                        </Heading>
                        <Text color='gray.dark' mt='28px' mb='32px'>
                            {data?.requirements.content}
                        </Text>
                        <UnorderedList>
                            {
                                data?.requirements.items.map((item, index) => (
                                    <ListItem key={`requirements-${index}`} pl='2em'>{item}</ListItem>
                                ))
                            }
                        </UnorderedList>

                        <Heading size='md' mt='64px' color={titleColor}>
                            What You Will Do
                        </Heading>
                        <Text color='gray.dark' mt='28px' mb='32px'>
                            {data?.role.content}
                        </Text>
                        <OrderedList>
                            {
                                data?.role.items.map((item, index) => (
                                    <ListItem key={`role-${index}`} pl='2em'>{item}</ListItem>
                                ))
                            }
                        </OrderedList>
                    </Box>
                </Flex>

                <_ResponsiveFooter />
            </Box>
        </PageContext.Provider>
    )
}

export default Detail