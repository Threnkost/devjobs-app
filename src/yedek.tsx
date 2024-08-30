
<Box
w='max(100%, 320px)'
minH='100vh'
pt={{ base: '32px', md: '42px', lg: '44px' }}
px={{ base: 'max(24px, 5%)', md: '40px' }}
bg='gray.light'
>

<FilterModal
    isOpen={isOpen}
    onClose={onClose}
    fullTimeOnly={filteredJobs.fullTimeOnly}
    locationValue={filteredJobs.location}
    dispatch={dispatch}
/>

<Box
    bg='violet.medium'
    w='max(100%, 320px)'
    h={{ base: '136px', md: '160px', lg: '162px' }}
    pos='absolute'
    top='0'
    left='0'
/>
<Grid
    templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
    position='relative'
    zIndex='1'
    rowGap={{ base: '32px', md: '46px', lg: '44px' }}
    maxW='1110px'
    mx={{ base: '0', lg: 'auto' }}
    pb='2em'
    columnGap={{ base: 0, md: '12px', lg: '28px' }}
>
    {/* Logo Area */}
    <GridItem colSpan={singleColumn}>
        <Image
            src='assets/devjobs.svg'
            alt=''
            width={115}
            height={32}
            style={{ userSelect: 'none' }}
        />
    </GridItem>
    {/* #endregion */}

    {/* Input Area */}
    <ResponsiveSearchBar
        queryValue={filteredJobs.query}
        locationValue={filteredJobs.location}
        fullTimeOnly={filteredJobs.fullTimeOnly}
        dispatch={dispatch}
        mobile__handleOpenFilterModal={onOpen}
    />
    {/* #endregion */}

    {/* Items */}
    {
        filteredJobs.filtered.map((item, index) => (
            <JobCard
                key={item.id + '-' + index}
                company={item}
                order={index}
            />
        ))
    }
    {/* #endregion */}
</Grid>
</Box>