import React, { useEffect,useState } from 'react'
import { Grid,Box, Heading,Image, TableContainer, Table, TableCaption, Thead, Th, Tr, Tbody, Td, HStack, Button, useDisclosure } from '@chakra-ui/react'
import Sidebar from '../Sidebar'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import CourseModal from './CourseModal'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCourses, getCourseLectures } from '../../../redux/actions/course'
import { addLecture, deleteCourse, deleteLecture } from '../../../redux/actions/admin'
import toast from "react-hot-toast"
const AdminCourses = () => {

  // const courses=[{
  //     _id:"asadafadfadfd",
  //     title:"React Course",
  //     category:"Web Development",
  //     poster:{
  //       url:"https://cdn.pixabay.com/photo/2023/06/13/15/05/astronaut-8061095_1280.png"
  //     },
  //     createdBy:"Falana",
  //     views:124,
  //     noOfVideos:12
  // }]


  const {courses,lectures} = useSelector(state=>state.course)
  const {loading,error,message} = useSelector(state=>state.admin);
  const dispatch = useDispatch()
  const {isOpen,onClose,onOpen} = useDisclosure()
  const [courseId,setCourseId] = useState('')
  const [courseTitle,setCourseTitle] = useState('')


  const courseDetailsHandler = (courseId,courseTitle)=>{
    dispatch(getCourseLectures(courseId))
    onOpen()
    setCourseId(courseId)
    setCourseTitle(courseTitle)
  };
  const deleteButtonHandler = courseId=>{
    dispatch(deleteCourse(courseId));
    console.log(courseId )
  }
  const deleteLectureButtonHandler= async(courseId,lectureId) =>{
    await dispatch(deleteLecture(courseId,lectureId));
    dispatch(getCourseLectures(courseId));
  }

  const addLectureHandler = async (e,courseId,title,description,video) =>{
    e.preventDefault()
    const myForm = new FormData();

    myForm.append('title',title);
    myForm.append('description',description);
    myForm.append('file',video);

    await dispatch(addLecture(courseId,myForm));
    dispatch(getCourseLectures(courseId))


  }

  useEffect(()=>{
    if(error){
      toast.error(error)
      dispatch({type:'clearError'});
    }
  
    if(message){
      toast.success(message);
      dispatch({type:'clearMessage'});
    }
    dispatch(getAllCourses())
  },[dispatch,error,message])

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
                  key={item._id} 
                  item = {item}
                  loading={loading}
                  />
                  ))
                }
            </Tbody>

        </Table>
      </TableContainer>

    <CourseModal
     isOpen={isOpen} 
     onClose = {onClose} 
     id={courseId}
     deleteButtonHandler={deleteLectureButtonHandler}
     addLectureHandler={addLectureHandler}
     courseTitle={courseTitle}
     lectures={lectures}
     loading={loading}
    />

     </Box>  
     <Sidebar />   
    </Grid>
  )
}

export default AdminCourses

function Row({item,courseDetailsHandler,deleteButtonHandler,loading}){
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
              onClick={()=> courseDetailsHandler(item._id,item.title)}
              variant={'outline'} 
              color="purple.500"
              isLoading={loading}
              >
                View Lecture 
              </Button>
              <Button
              onClick={()=>courseDetailsHandler(item._id)} 
              color={'purple.600'}
              isLoading={loading}
              >
                <RiDeleteBin7Fill />
              </Button>
            </HStack>
        </Td>
    </Tr>
  )
}

