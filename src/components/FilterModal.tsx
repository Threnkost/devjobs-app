import { Action } from "@/hooks/useFilter"
import { Button, Center, Checkbox, Divider, HStack, Input, Modal, ModalBody, ModalContent, ModalOverlay, VStack, useColorModeValue } from "@chakra-ui/react"
import Image from "next/image"
import { ChangeEvent, Dispatch } from "react"

const FilterModal = (
    { isOpen, dispatch, locationValue, fullTimeOnly, onClose }:
    {
        isOpen       : boolean
        locationValue: string
        fullTimeOnly : boolean
        dispatch     : Dispatch<Action>
        onClose      : () => void
    }
) => {

    const inputColor = useColorModeValue('dark.blue', 'white')

    const handleFullTimeOnly = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'SET_FULLTIME_ONLY', payload: event.target.checked })
    }

    const handleLocationChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'SET_LOCATION', payload: event.target.value })
    }

    const handleFilter = () => {
        dispatch({ type: 'FILTER' })
        onClose()
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent mx='24px'>

                <ModalBody padding='0px' py='24px'>
                    <VStack spacing='24px' alignItems='flex-start'>
                        <HStack ml='24px' spacing='16px'>
                            <Image 
                                src='assets/location.svg'
                                alt=''
                                width={20}
                                height={20}
                            />
                            <Input
                                variant='unstyled'
                                placeholder='Filter by location...'
                                value={locationValue}
                                onChange={handleLocationChange}
                                color={inputColor}
                            />
                        </HStack>
                        <Divider />
                        <Checkbox ml='24px' isChecked={fullTimeOnly} onChange={handleFullTimeOnly}>
                            Full Time Only
                        </Checkbox>
                        <Center w='100%' px='24px'>
                            <Button
                                variant='primary'
                                w='100%'
                                onClick={handleFilter}
                            >
                                Search
                            </Button>
                        </Center>
                    </VStack>
                </ModalBody>

            </ModalContent>
        </Modal>
    )
}
export default FilterModal