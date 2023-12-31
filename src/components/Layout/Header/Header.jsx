import React from 'react'
import { ColorModeSwitcher } from "../../../ColorModeSwitcher"
import { Button,Drawer, DrawerOverlay,DrawerContent,DrawerHeader, DrawerBody, useDisclosure,VStack,HStack} from '@chakra-ui/react'
import {RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill} from "react-icons/ri";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/actions/user';
// import { CgLaptop } from 'react-icons/cg';

const LinkButton = ({url="/",title="Home",onClose}) =>(
    <Link onClick={onClose} to={url}>
        <Button variant={'ghost'}> {title} </Button>
    </Link>
)






const Header = ({isAuthenticated=false,user}) => {
    const {isOpen,onOpen,onClose} = useDisclosure()
    
const dispatch = useDispatch()
const logoutHandler = () =>{
    onClose();
    dispatch(logout())
}

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
            zIndex={'overlay'}
            >
                <RiMenu5Fill />
            </Button>

            <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                    <DrawerContent>
                        <DrawerHeader borderBottomWidth={'1px'}> Course Bundler </DrawerHeader>
                        <DrawerBody> 
                        
                <VStack spacing={'4'} alignItems="flex-start">
                    <LinkButton  onClose = {onClose} url="/" title="Home" />
                    <LinkButton  onClose = {onClose} url="/courses" title="Browse All Courses" />
                    <LinkButton  onClose = {onClose} url="/request" title="Request a Course" />
                    <LinkButton  onClose = {onClose} url="/contact" title="Contact Us" />
                    <LinkButton  onClose = {onClose} url="/about" title="About" />
                </VStack>

                <HStack justifyContent={"space-evenly"} position="absolute" bottom={"2 rem"} width="80%">
                    {
                        isAuthenticated?(<>
                                <VStack>
                                    <HStack>
                                        <Link onClick ={onClose} to="/profile">
                                            <Button variant={"ghost"} colorScheme={'yellow'}> 
                                                Profile
                                            </Button>
                                        </Link>

                                        <Button variant={'ghost'}
                                        onClick={logoutHandler} >
                                          <RiLogoutBoxLine />
                                            Logout
                                        </Button>
                                    </HStack>
                            { 
                            user && user.role===1 && 
                            (<Link onClick = {onClose}to = "/admin/dashboard">
                             <Button colorScheme={"purple"} variant="ghost">
                                <RiDashboardFill style={{margin:'4px'}}/>
                                  Dashboard
                             </Button>
                            </Link>
                            )}
                                </VStack>
                        </>):(
                           <>
                              <Link onClick = {onClose}to="/login">
                                <Button colorScheme={'yellow'}>Login</Button>
                              </Link>
                                <p> OR </p>
                                <Link onClick = {onClose}to="/register">
                                    <Button colorScheme={'yellow'}>Sign Up</Button>
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


