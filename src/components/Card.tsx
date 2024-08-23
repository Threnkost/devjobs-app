import { Box, Center, HStack, Heading, Text } from "@chakra-ui/react"


const Card = ({ department, company, country, typeOfWork }: any) => {

    return (
        <Center 
            flexDirection='column' 
            alignItems='flex-start' 
            px='2em' 
            bg='white' 
            borderRadius='6px' 
            w='100%' 
            h='228px'
            gap='1em'
            mt='25px'
            position='relative'
        >
            <Box position='absolute' bg='violet.medium' borderRadius='15px' w='50px' h='50px' top='-25px' />
            <HStack>
                <Text color='gray.dark'>
                    5h ago
                </Text>
                <Box w='4px' h='4px' borderRadius='full' bg='gray.dark' />
                <Text color='gray.dark'>
                    {typeOfWork}
                </Text>
            </HStack>
            <Heading size='md'>
                {department}
            </Heading>
            <Text color='gray.dark'>
                {company}
            </Text>
            <Heading size='sm' color='violet.medium' mt='1em'>
                {country}
            </Heading>
        </Center>
    )
}
export default Card