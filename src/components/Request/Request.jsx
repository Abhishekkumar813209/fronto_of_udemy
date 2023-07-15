import { Container, VStack , Heading,Button,Box,FormLabel,Input, Textarea } from '@chakra-ui/react'
import React,{useState} from 'react'
import {Link} from "react-router-dom";

const Request = () => {
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [course,setCourse] = useState('');

  return (
    <Container h="92vh">
        <VStack h="full" justifyContent={'center'} spacing="16">
            <Heading children="Request New Course" />
            <form style={{width:'100%'}}>
                <Box my={'4'}>
                <FormLabel htmlFor="name" children="Name" />
                <Input 
                required 
                id="name" 
                value={name}
                onChange={e=>setName(e.target.value)}
                placeholder="abc"
                type={"text"}
                focusBorderColor="yellow.500"
                />
                </Box>

                <Box my={'4'}>
                <FormLabel htmlFor="email" children="Email" />
                <Input 
                required 
                id="email" 
                value={email}
                onChange={e=>setEmail(e.target.value)}
                placeholder="abc@gmail.com"
                type={"email"}
                focusBorderColor="yellow.500"
                />
                </Box>

                <Box my={'4'}>
                <FormLabel htmlFor="course" children="Course" />
                <Textarea
                required 
                id="course" 
                value={course}
                onChange={e=>setCourse(e.target.value)}
                placeholder="Your Message..."
                focusBorderColor="yellow.500"
                />
                </Box>

        
               
                <Button my="4" colorScheme = {"yellow"} type="submit">
                    Send Message
                </Button>
                
                
                <Box my="4">
                    See available Courses!{' '}
                    <Link to="/courses">
                        <Button colorScheme={'yellow'} variant="link">
                            Click Here
                        </Button> {' '}
                    </Link>
                    here
                </Box>

            </form>
        </VStack>
    </Container>
  )
}

export default Request