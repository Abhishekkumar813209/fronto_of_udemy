import React from 'react'
import { ColorModeSwitcher } from "../../../ColorModeSwitcher"
import { Button,Drawer, DrawerOverlay,DrawerContent,DrawerHeader, DrawerBody, useDisclosure,VStack,HStack} from '@chakra-ui/react'
import {RiMenu5Fill} from "react-icons/ri";
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../../../../../backend/middlewares/auth';

const LinkButton = ({url="/",title="Home"}) =>(
    <Link to={url}>
        <Button variant={'ghost'}> {title} </Button>
    </Link>
)



const Header = () => {
    const {isOpen,onOpen,onClose} = useDisclosure()
  return (
        <>
            <ColorModeSwitcher />
            <Button 
            onClick={onOpen}
            colorSchema={"yellow"} 
            width="12" 
            height={'12'} 
            rounded='full'
            position={'fixed'}
            top="6"
            left="6"
            >
                <RiMenu5Fill />
            </Button>

            <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                    <DrawerContent>
                        <DrawerHeader borderBottomWidth={'1px'}> Course Bundler </DrawerHeader>
                        <DrawerBody> 
                        
                <VStack spacing={'4'} alignItems="flex-start">
                    <LinkButton url="/" title="Home" />
                    <LinkButton url="/courses" title="Browse All Courses" />
                    <LinkButton url="/request" title="Request a Course" />
                    <LinkButton url="/contact" title="Contact Us" />
                    <LinkButton url="/about" title="About" />
                </VStack>

                <HStack justifyContent={"space-evenly"} position="absolute" bottom={"2 rem"} width="80%">
                    {
                        isAuthenticated?(<></>):(
                            <>
                                <Link to="/login">
                                    <Button>Login</Button>
                                </Link>
                            </>
                        )
                    }
                </HStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
            
            
        </>
    )
}

export default Header


