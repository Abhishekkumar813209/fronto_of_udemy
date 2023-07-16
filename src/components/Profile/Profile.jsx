import { Container,Heading,Stack,VStack,Avatar,Button, HStack,Image ,Text} from '@chakra-ui/react'
import React from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Profile = () => {

    const user = {
        name:'Abhishek',
        email:'abhi@gmail.com',  
        createdAt:String(new Date().toISOString()),
        role:0,
        subscription:{
            status:"active"
        },
        playlist:[
            {
            course:'sadsad',
            poster:
            'https://cdn.pixabay.com/photo/2023/06/13/15/05/astronaut-8061095_1280.png'
        }
    ]
    }

    const removeFromPlaylistHandler = id =>{
        console.log(id)
    }

  return (
    <Container minH={'95vh'} maxW="container.lg" py="8">

    <Heading children="Profile" m="8" textTransform={'uppercase'}/>
        <Stack
        justifyContent={"flex-start"}
         direction={['column','row']} 
         alignItems={'center'} 
         spacing={['8','16']}
         padding="8"
        >
        
        <VStack>
            <Avatar boxSize={'48'} />

            <Button colorScheme={'yellow'} variant = "ghost">
                Change Photo
            </Button>
        </VStack>

        <VStack>
            <HStack>
                <Text children="Name" fontWeight={'bold'} />
                <Text children={user.name} />
            </HStack>
            <HStack>
                <Text children="Email" fontWeight={'bold'} />
                <Text children={user.email} />
            </HStack>
            <HStack>
                <Text children="CreatedAt" fontWeight={'bold'} />
                <Text children={user.createdAt.split('T')[0]} />
            </HStack>
            {
                user.role!==1 && (
                    <HStack>
                        <Text children="Subscription" fontWeight={'bold'} />
                        {user.subscription.status==="active" ? (
                            <Button color={'yellow.500'} variant="unstyled" > Cancel Subscription </Button>
                        ):(
                            <Link to = "/subscribe">
                                <Button colorScheme={'yellow'}> Subscribe </Button>
                            </Link>
                        )}
                    </HStack>
                )}
                <Stack direction={['column','row']} alignItems={'center'}>
                    <Link to= "/updateprofile">
                        <Button> Update Profile </Button>
                    </Link>
                    <Link to = "/changepassword">
                        <Button> Change Password </Button>
                    </Link>
                </Stack>
        </VStack>
        </Stack>

    <Heading children="Playlist" size={'md'} my="8" />
        
        {
            user.playlist.length> 0 && (
                <Stack 
                direction = {['column','row']}
                alignItems={'center'}
                flexWrap="wrap"
                p="4"
                >

                {
                 user.playlist.map((element,index)=>(
                    <VStack w="48" m="2" key={element.course}>

                        <Image
                        boxSize={'full'}
                        objectFit="contain"
                        src={element.poster}
                        />
                        <HStack>
                            <Link to ={`/course/${element.course}`}>
                                <Button variant={'ghost'} colorScheme="yellow">
                                    Watch Now
                                </Button>
                            </Link>  
                            <Button onClick={()=>removeFromPlaylistHandler(element.course)}>
                                <RiDeleteBin7Fill />
                            </Button>
                        </HStack>
                    </VStack>
                 ))   
                }

                </Stack>    
            )

        }
    </Container>
  )
}

export default Profile 