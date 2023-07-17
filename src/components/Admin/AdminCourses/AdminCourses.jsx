import React from 'react'
import { Grid,Box, Heading,Image, TableContainer, Table, TableCaption, Thead, Th, Tr, Tbody, Td, HStack, Button, useDisclosure } from '@chakra-ui/react'
import Sidebar from '../Sidebar'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import CourseModal from './CourseModal'

const AdminCourses = () => {

  const courses=[{
      _id:"asadafadfadfd",
      title:"React Course",
      category:"Web Development",
      poster:{
        url:"https://cdn.pixabay.com/photo/2023/06/13/15/05/astronaut-8061095_1280.png"
      },
      createdBy:"Falana",
      views:124,
      noOfVideos:12
  }]

  const {isOpen,onClose,onOpen} = useDisclosure()


  const courseDetailsHandler = (userId)=>{
    onOpen()
  };
  const deleteButtonHandler = userId=>{
    console.log(userId);
  }


  return (
    <Grid
    minH={'100vh'}
    templateColumns={['1fr','5fr 1fr']}
     >
     <Box p={['0','8']} overflowX="auto">

      <Heading 
      textTransform={'uppercase'}
      children="All Users"
      my="16"
      textAlign={['center','left']}
      />

      <TableContainer w={["100vw",'full']}>
        <Table variant={'simple'} size='lg'>
            <TableCaption> All available Courses in the database </TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Views</Th>
                <Th isNumeric> Lectures </Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
 
            <Tbody>
                {
                  courses.map(item=>(
                  <Row 
                  courseDetailsHandler={courseDetailsHandler} 
                  deleteButtonHandler={deleteButtonHandler}
                  key={item._id} item = {item}/>
                  ))
                }
            </Tbody>

        </Table>
      </TableContainer>

    <CourseModal isOpen={isOpen} onClose = {onClose} />

     </Box>  
     <Sidebar />   
    </Grid>
  )
}

export default AdminCourses

function Row({item,courseDetailsHandler,deleteButtonHandler}){
  return (
    <Tr>
        <Td>#{item._id}</Td>
        <Td>
          <Image src={item.poster.url} />
        </Td>
        <Td>{item.category}</Td>
        <Td>{item.title}</Td>
        <Td isNumeric>{item.createdBy}</Td>
        <Td isNumeric>{item.views}</Td>
        <Td isNumeric>{item.numOfVideos}</Td>

        <Td isNumeric>
            <HStack justifyContent={'flex-end'}>
              <Button 
              onClick={()=> courseDetailsHandler(item._id)}
              variant={'outline'} 
              color="purple.500"
              >
                View Lecture 
              </Button>
              <Button
              onClick={()=>courseDetailsHandler(item._id)} 
              color={'purple.600'}
              >
                <RiDeleteBin7Fill />
              </Button>
            </HStack>
        </Td>
    </Tr>
  )
}

