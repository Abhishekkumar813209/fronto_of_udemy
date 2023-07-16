import { Button, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiAddCircleFill, RiDashboardFill, RiEyeFill, RiUser3Fill } from 'react-icons/ri'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {

    const location = useLocation();

  return (
    <VStack 
    spacing={'8'} 
    p='16'
    boxShadow={'2px 0 10px rgba(107,70,193.0,5)'}>
            <LinkButton 
            Icon={RiDashboardFill} 
            text="Dashboard" 
            url={'dashboard'} 
            active={true} 
            />
            <LinkButton 
            Icon={RiAddCircleFill}
             text="Create Course" 
             url={'createcourse'} 
             />
            <LinkButton Icon={RiEyeFill} text="Dashboard" url={'dashboard'} />
            <LinkButton Icon={RiUser3Fill} text="Dashboard" url={'dashboard'} />
               
    </VStack>
  )
}

export default Sidebar

function LinkButton({url,Icon,text,active}) {
    return (
        <Link to = "/admin/dashboard"> 
        <Button 
        fontSize={'larger'} 
        variant="ghost" 
        colorScheme={active?"purple":''}
        >
        <Icon style={{margin:'4px'}} />
            <RiDashboardFill style={{margin:'4px'}} />
            {text}
        </Button>
    </Link>
    )
}