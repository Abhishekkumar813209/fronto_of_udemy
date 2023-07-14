import React from 'react'
import { ColorModeSwitcher } from "../../../ColorModeSwitcher"
import { Button,Drawer, DrawerOverlay,DrawerContent,DrawerHeader, DrawerBody, useDisclosure} from '@chakra-ui/react'
import {RiMenu5Fill} from "react-icons/ri";
import { Link } from 'react-router-dom';

const funtion LinkButton = (url="/",title="Home") =>(
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
                        <DrawerBody> </DrawerBody>
                    </DrawerContent>
            </Drawer>
            
    <VStack>
            
    </VStack>
        </>
    )
}

export default Header


