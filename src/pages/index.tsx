import { Box, Grid, GridItem, Heading, Input, InputGroup, InputRightElement, Button, IconButton, HStack } from '@chakra-ui/react'
import Card from '@/components/Card'
import FilterModal from '@/components/FilterModal'
import Image from 'next/image'


const App = () => {

  return (
    <Box w='100vw' minH='100vh' bg='gray.light' position='relative' zIndex='0'>
      <Box position='absolute' top='0' left='0' bg='violet.medium' w='100%' h='136px' zIndex='1' />
      <Grid position='relative' templateColumns='1fr' px='24px' pt='32px' zIndex='2' rowGap='32px'>

        <FilterModal isOpen={false} />

        {/*
          TODO Daha sonra kutucuk büyüklüklerini ve boşluklarını pixel-perfect yap.
        */}
        <GridItem>
          <Heading size='xl' color='white'>devjobs</Heading>
        </GridItem>

        <GridItem>
          <InputGroup>
            {/*BUG Bu kısımda input içerisindeki text butonları aşıp geçiyor. */}
            <InputRightElement h='100%' pointerEvents='none' mr='2.5em'>
              <HStack spacing='24px'>
                <Image 
                  src='assets/filter.svg'
                  alt=''
                  width={20}
                  height={20}
                />
                <IconButton aria-label='Search' bg='violet.medium' icon={<></>} w='48px' h='48px' />
              </HStack>
            </InputRightElement>
            <Input
              placeholder='Filter by title...'
              h='80px'
              bg='white'
              border='none'
            />
          </InputGroup>
        </GridItem>

        <GridItem>
          <Card
            typeOfWork='Full Time'
            department='Senior Software Engineer'
            country='United Kingdom'
            company='Scoot'
          />
        </GridItem>

        <Button
          variant='primary'
        >
          Load More
        </Button>
      </Grid>
    </Box>
  )
}
export default App
