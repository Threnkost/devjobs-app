import { Box, Image, useBreakpointValue } from "@chakra-ui/react"

export const Pattern = () => {

    const variant = useBreakpointValue({
        base: '/mobile/bg-pattern-header.svg',
        md  : '/tablet/bg-pattern-header.svg',
        lg  : '/desktop/bg-pattern-header.svg'
    })

    return (
        <Box position='absolute' top='0' left='0' w='100%' h={{ base: '136px', md: '160px', lg: '162px' }}>
            <Image
                src={variant}
                alt=''
                w='100%'
                h='100%'
            />
        </Box>
    )
}