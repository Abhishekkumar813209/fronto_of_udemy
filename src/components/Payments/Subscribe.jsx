import { Box, Container,Heading, VStack,Text, Button } from '@chakra-ui/react'
import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { server } from '../../redux/store'
import axios from 'axios'
import { buySubscription } from '../../redux/actions/user'

const Subscribe = () => {

  const dispatch = useDispatch();
  const [key,setKey] = useState("");

  const subscribeHandler = async() =>{
    await axios.get(`${server}/api/v1/razorpaykey`)
  }

  setKey(key);
  dispatch(buySubscription())


  return (
    <Container h="90vh" p="16">
        <Heading children="Welcome" my="8" textAlign={'center'} />

        <VStack
          boxShadow={'lg'}
          alignItems="stretch"
          borderRadius={'lg'}
          spacing="0"
        >

        <Box bg="yellow.400" p={'4'} css={{borderRadius:"8px 8px 0 0"}}>
          <Text color = {"black"} children={'Pro Pack - ₹299.00'} />
        </Box>

        <Box p="4">
        <VStack textAlign={"center"} px="8" mt={"4"} spacing="8">
        <Text color={'black'} children={`Join Pro Pack and get Access to all content`}/>
        <Heading size="md" children={"₹299 Only"} />
        </VStack>

        <Button 
        my="8" 
        w="full"
        colorScheme={'yellow'}
        onClick={subscribeHandler}
        > 
        Buy Now 
        </Button>
        </Box>

        <Box 
        bg="blackAlpha.100"
        p="4"
        css={{borderRadius:'0 0 8px 8px'}}
        >
        <Heading
          color={'white'}
          textTransform="uppercase"
          size="sm"
          children={'100% refund at cancellation'}
         />
          <Text 
          fontSize={'xs'}
          color="white"
          children={'*Terms & Conditions Apply'}
          />
        </Box>  

        </VStack>
    </Container>
  )
}

export default Subscribe