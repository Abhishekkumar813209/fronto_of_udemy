import { Container,Heading, VStack } from '@chakra-ui/react'
import React from 'react'

const ChangePassword = () => {
  return (
   <Container>
        <form>
            <Heading 
            children="Change Password"
            my="16"
            textAlign={['center','left']}
             />
             <VStack spacing={'8'}>

             </VStack>
        </form>
   </Container>
  )
}

export default ChangePassword