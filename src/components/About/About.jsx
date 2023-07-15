import { Avatar, Container, Heading, Stack, VStack,Text,Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Founder = () =>(
    <Stack
    direction={['column','row']}
    spacing={['4','16']}
    padding={'8'} >
        <VStack>
            <Avatar boxSize={['40','48']} />
            <Text children="Co-Founder" opacity={0.7} />
        </VStack>
        <VStack justifyContent={'center'} alignItems={['center','flex-start']}>
            <Heading children="Abhishek Singh" size={['md','xl']} />
            <Text
            textAlign={['center','left']}
            children={`Hi , I am a full-stack developer and a teacher. 
            Our mission is to provide quality content at reasonable price.`}
            />
        </VStack>
    </Stack>
)

const About = () => {
  return (
   <Container maxW={'container.lg'} padding="16" boxShadow={'lg'}>
        <Heading children="About Us" textAlign={['center','left']} />

        <Founder />
        <Stack m="8" direction={["column","row"]} alignItems="center">
           <Text fontFamily={'cursive'} m="8" textAlign={['center','left']}>
            We are a video streaming platform with some premium courses available
            only for premium users.
           </Text> 

            <Link to="/subscribe">
                <Button variant={'ghost'} colorScheme="yellow">
                    Checkout Our Plan
                </Button>
            </Link>
        </Stack>
   </Container>
  )
}

export default About