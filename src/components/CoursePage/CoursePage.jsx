import { Grid , Box,Heading,Text, VStack } from '@chakra-ui/react'
import React,{useEffect, useState} from 'react'
import introVideo from "../../assets/videos/lake_aerial_view_drone_flight_view_943.mp4"
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import {getCourseLectures} from "../../redux/actions/course"

const CoursePage = () => {

    const [lectureNumber,setLectureNumber] = useState(0)

    const lectures = [
        {
        _id:"sadasdsad",
        title:"Sample",
        description:"Sample secfdf ndfds sfasfj afjasdf",
        video:{
            url:"adfasdf"
        }
    },
    {
        _id:"sadasdsad2",
        title:"Sample2",
        description:"Sample secfdf ndfds sfasfj afjasdf",
        video:{
            url:"adfasdf"
        }
    },
    {
        _id:"sadasdsad3",
        title:"Sample3",
        description:"Sample secfdf ndfds sfasfj afjasdf",
        video:{
            url:"adfasdf"
        }
    },
]

    const dispatch = useDispatch()
    const params = useParams()
    useEffect(()=>{
        dispatch(getCourseLectures(params.id))
    },[dispatch,params.id])

  return (
    
           <Grid minH={'90vh'} templateColumns={['1fr','3fr 1fr']}>
    <Box>
    <video 
            width={'100%'}
            controls 
            controlsList="nodownload noremoteplayback" 
            disablePictureInPicture
            disableRemotePlayback
            src={introVideo}>
     </video>

     <Heading m='4' children={`#${lectureNumber+1} ${lectures[lectureNumber].title}`} />
        <Heading m='4' children="Description" />
        <Text m="4" children={lectures[lectureNumber].description} />
    </Box>
    <VStack>
        {
            lectures.map((element,index)=>(
                <button key={element._id}
                onClick={()=> setLectureNumber(index)}
                style={{
                    width:"100%",
                    padding:"1rem",
                    textAlign:"center",
                    margin:0,
                    borderBottom:"1px solid rgba(0,0,0,0.2)"
                }}
                >
                    <Text noOfLines={1}>
                        #{index+1} {element.title}
                    </Text>
                </button>
            ))
        }
    </VStack>
   </Grid>
  )
}



export default CoursePage