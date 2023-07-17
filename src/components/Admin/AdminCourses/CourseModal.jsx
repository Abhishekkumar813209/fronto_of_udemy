import { Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay,ModalBody, Box,Grid, Heading, Stack } from '@chakra-ui/react'
import React from 'react'

const CourseModal = ({isOpen,onClose,id}) => {

    const courseTitle='React Course';

  return (
    <Modal isOpen={isOpen} size="full">
        <ModalOverlay/>

        <ModalContent>
            <ModalHeader>
                {courseTitle}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody p="16">
                <Grid templateColumns={['1fr','3fr 1fr']}>
                    <Box px={['0','16']}>
                        <Box my="5">
                            <Heading children={courseTitle} />
                            <Heading children={`#${id}`} size="sm" opacity={0.4} />
                        </Box>

                        <Heading children={'Lectures'} size='lg' />
                        <VideoCard />

                    </Box>
                </Grid>
            </ModalBody>
        </ModalContent>

    </Modal>
  )
}

export default CourseModal

function VideoCard(){
    return <Stack></Stack>
}