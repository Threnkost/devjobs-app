import { Box, Image as ChakraImage, Grid, GridItem, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import Image from 'next/image'
import { Company } from '@/types/company'
import JobCard from '@/components/JobCard'
import { useFilter } from '@/hooks/useFilter'
import FilterModal from '@/components/FilterModal'
import { ResponsiveSearchBar } from '@/components/ResponsiveSearchBar'
import { fetchData } from '@/utils/fetchData'
import { Pattern } from '@/components/Pattern'
import { ThemeToggleButton } from '@/components/ThemeToggleButton'


export async function getStaticProps() {
    return {
        props: {
            data: fetchData(),
        },
    }
}


const singleColumn = { base: 1, md: 2, lg: 3 }


const App = ({ data }: { data: Array<Company> }) => {

    const background = useColorModeValue('gray.light', 'dark.midnight')

    const [filteredJobs, dispatch] = useFilter({
        defaultSource  : data,
        defaultQuery   : '',
        defaultLocation: '',
        keywords       : {
            query       : ['company', 'position'],
            location    : 'location',
            fullTimeOnly: 'contract'
        }
    })
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (

        <Box
            w    = 'max(100%, 320px)'
            minH = '100vh'
            pt   = {{ base: '32px', md: '42px', lg: '44px' }}
            px   = {{ base: 'max(24px, 5%)', md: '40px' }}
            bg   = {background}
        >
            <FilterModal
                isOpen        = {isOpen}
                onClose       = {onClose}
                fullTimeOnly  = {filteredJobs.fullTimeOnly}
                locationValue = {filteredJobs.location}
                dispatch      = {dispatch}
            />

            <Pattern />

            <Grid
                templateColumns = {{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
                position        = 'relative'
                zIndex          = '1'
                rowGap          = {{ base: '32px', md: '46px', lg: '44px' }}
                maxW            = '1110px'
                mx              = {{ base: '0', lg: 'auto' }}
                pb              = '2em'
                columnGap       = {{ base: 0, md: '12px', lg: '28px' }}
            >
                {/* Logo Area */}
                <GridItem colSpan={singleColumn} display='flex' justifyContent='space-between'>
                    <Image
                        src    = 'assets/devjobs.svg'
                        alt    = ''
                        width  = {115}
                        height = {32}
                        style  = {{ userSelect: 'none' }}
                    />
                    <ThemeToggleButton />
                </GridItem>
                {/* #endregion */}

                {/* Input Area */}
                <ResponsiveSearchBar
                    queryValue                    = {filteredJobs.query}
                    locationValue                 = {filteredJobs.location}
                    fullTimeOnly                  = {filteredJobs.fullTimeOnly}
                    dispatch                      = {dispatch}
                    mobile__handleOpenFilterModal = {onOpen}
                />
                {/* #endregion */}

                {/* Items */}
                {
                    filteredJobs.filtered.map((item, index) => (
                        <JobCard
                            key     = {item.id + '-' + index}
                            company = {item}
                            order   = {index}
                        />
                    ))
                }
                {/* #endregion */}
            </Grid>
        </Box>
    )
}
export default App
