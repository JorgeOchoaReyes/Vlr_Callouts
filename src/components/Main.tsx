import React from 'react';
import { Box, Text, Flex, Heading, VStack, Image, Button, SlideFade, Menu, Tooltip } from '@chakra-ui/react';
import Map from '../Util/split.png'; 
import {CheckIcon} from '@chakra-ui/icons'; 
import Card from '../components/Card'
import { animationDelay, lighBG, lightThemeGrad } from '../Util/constants';
import view_1 from '../Util/asite.png'
import {Mapper} from '../components/Mapper';

interface ViewInterface {
    imgUrl: string,
    id: number
}

interface CalloutInterface {
    callout: string,
    id: number,
    views: ViewInterface[],
    cords: string
}

interface MapInterface {
    imgURL: string,
    id: number, 
    name: string,
    callouts: CalloutInterface[]
}

const View1: ViewInterface = {
    imgUrl: view_1.src,
    id: 1, 
}

const View2: ViewInterface = {
    imgUrl: "",
    id: 2,  
}

interface HeaderProps {
    
}


const Callout1: CalloutInterface = {
    callout: 'A-Site',
    id: 1,
    views: [View1, View2],
    cords: '"83,347,33,315"'
}


const Map1: MapInterface  = {
    imgURL: Map.src,
    id: 1, 
    name: 'Split',
    callouts: [Callout1]
} 


const LeftContent: React.FC<MapInterface> = (map: MapInterface) => {

    return (
            <VStack 
                w="full" 
                h="full" 
                p="10"  
                justifyContent='space-around'
                >
                <SlideFade delay={animationDelay} in={true} offsetY='100px'>
                    <Box textColor='white'>
                        <Card imgUrl={map.callouts[0].views[0].imgUrl} /> 
                    </Box>
                </SlideFade>
            </VStack>
    )
}

const RightContent = ({map_img}) => {    
    return (
        <VStack 
            w="full" 
            h="full" 
            p="10"  
            justifyContent='space-around'
            alignItems='center'>
            <SlideFade delay={animationDelay} in={true} offsetX='100px'>
                <Box>
                    <Mapper  map_img={map_img} />
                </Box>

            </SlideFade>
                           
        </VStack>
    )
}

export const Main: React.FC<HeaderProps> = ({}) => {
    return (
        <Flex h={{base: "auto", xl: '95vh'}}  bg={lighBG} backgroundImage={lightThemeGrad}  direction={{base: "column", md: "row"}}>
            <LeftContent {...Map1} /> 
            <RightContent map_img={Map1.imgURL} />      
        </Flex> 
    );
}

