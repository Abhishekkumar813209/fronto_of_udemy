import React from 'react'
import { ColorModeSwitcher } from "../../../ColorModeSwitcher"
import { Button,Drawer} from '@chakra-ui/react'
import {RiMenu5Fill} from "react-icons/ri";

const Header = () => {
  return (
        <>
            <ColorModeSwitcher />
            <Button 
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

            <Drawer>

            </Drawer>

        </>

    )
}

export default Header