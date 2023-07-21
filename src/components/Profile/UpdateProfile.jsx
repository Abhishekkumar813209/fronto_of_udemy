import React,{useState} from 'react'
import { Container,Heading,VStack,Input,Button } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { updateProfile } from '../../redux/actions/profile';

const UpdateProfile = ({user}) => {

    const[name,setName] = useState(user.name)
    const [email,setEmail] = useState(user.email);

    const dispatch= useDispatch()

    const submitHandler=(e)=>{
      e.preventDefault();
      dispatch(updateProfile(name,email));
  }


  return (
    <Container py="16" minH={'90vh'}>
          <form onSubmit={submitHandler}>
            <Heading 
            textTransform={'uppercase'}
            children="Update Profile"
            my="16"
            textAlign={['center','left']}
             />

             <VStack spacing={'8'}>
             <Input 
                value={name}
                onChange={e=>setName(e.target.value)}
                placeholder="Name"
                type={"text"}
                focusBorderColor="yellow.500"
                />

             <Input 
                value={email}
                onChange={e=>setEmail(e.target.value)}
                placeholder="Email"
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

export default UpdateProfile