import { Company } from '@/types/company'
import {
    GridItem,
    Flex,
    Center,
    VStack,
    HStack,
    Text,
    Heading,
    Image,
    Box,
    useColorModeValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { MouseEvent } from 'react'


const JobCard = ({ company, order }: { company: Company, order: number }) => {

    const backgroundColor = useColorModeValue('white', '#19202D')
    const titleColor = useColorModeValue('dark.blue', 'white')

    const router = useRouter()

    const handleDirection = (event: MouseEvent<HTMLDivElement>) => {
        router.push(`/details/${company.id}` || '#')
    }

    return (
        <GridItem
            h='228px'
            mt='25px'
            transition='200ms ease'
            borderRadius='6px'
            _hover={
                {
                    transform: 'scale(1.05)',
                    boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.05)',
                    cursor: 'pointer'
                }
            }
            onClick={handleDirection}
        >
            <motion.div
                initial={
                    {
                        opacity: 0,
                        x: -24
                    }
                }
                animate={{
                    opacity: 1,
                    x: 0
                }}
                transition={{
                    duration: 0.5,
                    delay: order * 0.075
                }}
                style={{ height: '100%', width: '100%', backgroundColor, borderRadius: '6px', paddingLeft: '32px' }}
            >
                <Flex h='100%' direction='column' position='relative' top='-25px' alignItems='flex-start' gap={0} >
                    <Center
                        w='50px'
                        h='50px'
                        borderRadius='15px'
                        bg={company.logoBackground}
                        mb='24px'
                    >
                        <Image
                            src={`/logos/${company.logo}`}
                            alt=''
                        />
                    </Center>

                    <VStack spacing='8px' alignItems='flex-start' >
                        <HStack>
                            <Text color='gray.dark' >
                                {company.postedAt}
                            </Text>
                            <Box w='4px' h='4px' borderRadius='full' bg='gray.dark'
                            />
                            <Text color='gray.dark' >
                                {company.contract}
                            </Text>
                        </HStack>
                        <Heading size='md' color={titleColor}>
                            {company.position}
                        </Heading>
                        <Text color='gray.dark' >
                            {company.company}
                        </Text>
                    </VStack>

                    <Heading size='xs' color='violet.medium' position='absolute' bottom='0px' >
                        {company.location}
                    </Heading>

                </Flex>
            </motion.div>
        </GridItem>
    )
}
export default JobCard