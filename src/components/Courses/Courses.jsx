import { Button, Container , HStack, Heading , Input,Text } from '@chakra-ui/react'
import React,{useState} from 'react'

const Courses = () => {

    const [keyword , setKeyword] = useState("")
    const [category,setCategory] = useState("")


    const categories = [
      'Web development',
      'Artificial Intelligence',
      'Data Structure & Algorithm',
      'App Development',
      'Data Science',
      'Game Development'
    ]

  return (
    <Container minH={'95vh'} maxW="container.lg" paddingY = {'8'}>
        <Heading children="All Courses" m={'8'} />

        <Input value={keyword}
         onChange={(e) => setKeyword(e.target.value)}
         placeholder = "Search a course ..."
         type={'text'}
         focusBorderColor='yellow.500'
         />
        <HStack overflowX={'auto'} paddingY="8" css={{"&::-webkit-scrollbar":{
          display:'none',
        },
        }}>
        
            {
              categories.map((item,index) => {
               return (
                <Button key = {index} onClick ={()=> setCategory(item)} minW={'60'}>
                  <Text children = {item} />
                </Button>
               )
              })
            }
        </HStack>
    </Container>
  )
}

export default Courses 