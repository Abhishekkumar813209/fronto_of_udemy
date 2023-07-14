import React from 'react'
import {Heading, Stack,VStack,Text,Button,Image} from "@chakra-ui/react";
import "./home.css"
import { Link } from 'react-router-dom';
import vg from "../assets/"

const Home = () => {
  return (
    <section className="home">
        <div className="container">
            <Stack
            direction={["column","row"]}
            height="100%"
            justifyContent={["center","flex-end"]}
            alignItems="center"
            spacing={['16','56']}
            >

        <VStack width={"full"} alignItems={["center","flex-end"]}>
            <Heading children="LEARN FROM THE EXPERTS" size={'2xl'} />
            <Text children = "Find Valuable Content At Reasonablel Price" />
            <Link to="/courses">
                <Button size={"lg"} colorScheme='yellow'>
                    Explore Now
                </Button>
            </Link>
        </VStack>


    <Image boxSize={"md"} src={vg}  objectFit="contain" />


            </Stack>
        </div>
    </section>
  )
}

export default Home