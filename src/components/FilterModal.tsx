import { Button, Center, Checkbox, Divider, HStack, Input, Modal, ModalBody, ModalContent, ModalOverlay, VStack } from "@chakra-ui/react"
import Image from "next/image"


const FilterModal = ({ isOpen }: any) => {

    return (
        <Modal isOpen={isOpen} onClose={() => { }} isCentered>
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
                            />
                        </HStack>
                        <Divider />
                        <Checkbox ml='24px'>
                            Full Time Only
                        </Checkbox>
                        <Center w='100%' px='24px'>
                            <Button
                                variant='primary'
                                w='100%'
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