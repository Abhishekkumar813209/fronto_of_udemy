import { Button, Container,Heading, Input, VStack } from '@chakra-ui/react'
import React,{useState} from 'react'

const ChangePassword = () => {

    const [oldPassword,setOldPassword] = useState('');
    const [newPassword,setNewPassword] = useState('')
  return (
   <Container>
        <form>
            <Heading 
            children="Change Password"
            my="16"
            textAlign={['center','left']}
             />
             <VStack spacing={'8'}>
             <Input 
                required 
                value={oldPassword}
                onChange={e=>setOldPassword(e.target.value)}
                placeholder="Old Password"
                type={"email"}
                focusBorderColor="yellow.500"
                />

              <Input 
                required 
                value={newPassword}
                onChange={e=>setNewPassword(e.target.value)}
                placeholder="Old Password"
                type={"email"}
                focusBorderColor="yellow.500"
                />

                <Button w='full' colorScheme={'yellow'} type="submit">
                  Change  
                </Button>
             </VStack>
        </form>
   </Container>
  )
}

export default ChangePassword