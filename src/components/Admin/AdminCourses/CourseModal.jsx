import { Modal, ModalCloseButton, ModalContent, ModalHeader, Input,ModalOverlay,ModalBody, Box,Grid, Heading, Stack,Text, Button, VStack, ModalFooter } from '@chakra-ui/react'
import React, { useState } from 'react'
import {RiDeleteBin7Fill} from "react-icons/ri"
import { fileUploadCss } from '../../Auth/Register';

const CourseModal = ({
    isOpen,
    onClose,
    id,
    deleteButtonHandler,
    addLectureHandler,
    courseTitle,
    lectures =[]   
    }) => {

   

    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    const [video,setVideo] = useState("")
    const [videoPrev,setVideoPrev]=useState("")

    
  const changeVideoHandler = (e) =>{
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          setVideoPrev(reader.result);
          setVideo(file);
        };
      }
}

const handleClose=()=>{
    setTitle("")
    setDescription("")
    setVideo("")
    setVideoPrev("");
    onClose()
}

  return (
    <Modal isOpen={isOpen} size="full" onClose={handleClose}
    scrollBehavior='outside'>
        <ModalOverlay/>

        <ModalContent>
            <ModalHeader>
                {courseTitle}
            </ModalHeader>
            <ModalCloseButton onClick={onClose} />
            <ModalBody p="16">
                <Grid templateColumns={['1fr','3fr 1fr']}>
                    <Box px={['0','16']}>
                        <Box my="5">
                            <Heading children={courseTitle} />
                            <Heading children={`#${id}`} size="sm" opacity={0.4} />
                        </Box>

                        <Heading children={'Lectures'} size='lg' />
                        <VideoCard 
                        title="L"
                        description="This is a intro Lecture , where you will know the basics of react"
                        num={1}
                        lectureId="asdafafasd"
                        courseId={id}
                        deleteButtonHandler={deleteButtonHandler}
                        />
                    </Box>
                    <Box>
                        <form onSubmit={e=>addLectureHandler(e,id,title,description,video)}>
                                <VStack>

                                    <Heading 
                                    children="Add Lecture"
                                    size={'md'}
                                    textTransform='uppercase'
                                    />
                                    <Input 
                                    focusBorderColor="purple.300" 
                                    placeholder="Title" 
                                    value={title}
                                    onChange={e=>setTitle(e.target.value)}    
                                    />
                                     <Input 
                                    focusBorderColor="purple.300" 
                                    placeholder="Description" 
                                    value={description}
                                    onChange={e=>setDescription(e.target.value)}    
                                    />                          
                                    <Input 
                                            accept="video/mp4" 
                                            required 
                                            type={'file'}
                                            focusBorderColor="purple.300"
                                            css={{
                                            '&::file-selector-button':{
                                                ...fileUploadCss,
                                                color:'purple'
                                            }
                                            }}
                                            onChange={changeVideoHandler}
                                    />
                                    {
                                     videoPrev && (
                                        <video
                                        controlsList="nodownload"
                                        controls
                                        src={videoPrev}
                                        > 
                                        </video>
                                     )   
                                    }
                                    <Button w="full" colorScheme={'purple'} type="submit">
                                        Upload
                                    </Button>
                                </VStack>
                        </form>
                    </Box>
                </Grid>
            </ModalBody>
                
                <ModalFooter>
                    <Button onClick={handleClose}>Close </Button>
                </ModalFooter>

        </ModalContent>

    </Modal>
  )
}

export default CourseModal

function VideoCard({title,description,num,lectureId,courseId,deleteButtonHandler}){
    return (
    <Stack 
    direction={['column','row']} 
    my="8" borderRadius={'lg'} 
    boxShadow={'0 0 10px rgba(107,70,193,0.5)'}
    justifyContent={['flex-start','space-between']}
    p={['4','8']}
    >
        <Box> 
            <Heading size={'sm'} children={`#${num} ${title}`} /> 
            <Text children={description} />
        </Box>

        <Button 
        color={'purple.600'}
        onClick={()=>deleteButtonHandler(courseId,lectureId)}>
            <RiDeleteBin7Fill />            
        </Button>
    </Stack>
    )
}