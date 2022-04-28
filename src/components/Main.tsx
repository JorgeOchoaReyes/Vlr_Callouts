import React from 'react';
import { Box, Text, Flex, Heading, VStack, Image, Button, SlideFade, Menu, Tooltip } from '@chakra-ui/react';
import Map from '../Util/split.png'; 
import {CheckIcon} from '@chakra-ui/icons'; 
import Card from '../components/Card'
import { animationDelay, lighBG, lightThemeGrad } from '../Util/constants';

interface HeaderProps {

}


const LeftContent = () => {

    return (
            <VStack 
                w="full" 
                h="full" 
                p="10"  
                justifyContent='space-around'
                >
                <SlideFade delay={animationDelay} in={true} offsetY='100px'>
                    <Box textColor='white'>
                        <Card /> 
                    </Box>
                </SlideFade>
            </VStack>
    )
}

const RightContent = () => {
    return (
        <VStack 
            w="full" 
            h="full" 
            p="10"  
            justifyContent='space-around'
            alignItems='center'>
            <SlideFade delay={animationDelay} in={true} offsetX='100px'>
                <Box>


                    <Image   
                            src={Map.src} 
                            alt='Company Logo'/>
 
                </Box>

            </SlideFade>
                           
        </VStack>
    )
}

export const Main: React.FC<HeaderProps> = ({}) => {
    return (
        <Flex h={{base: "auto", xl: '100vh'}}  bg={lighBG} backgroundImage={lightThemeGrad}  direction={{base: "column", md: "row"}}>
            <LeftContent /> 
            <RightContent />     
        </Flex> 
    );
}

