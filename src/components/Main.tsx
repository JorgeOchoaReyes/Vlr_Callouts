import React from 'react';
import { Box, Text, Flex, Heading, VStack, Image, Button, SlideFade, Menu, Tooltip, Select } from '@chakra-ui/react';
import Map from '../Util/split.png'; 
import {CheckIcon} from '@chakra-ui/icons'; 
import Card from '../components/Card'
import { animationDelay, lighBG, lightThemeGrad } from '../Util/constants';
import view_1 from '../Util/asite.png'
import {Mapper} from '../components/Mapper';
import {data} from '../Util/constants'; 


interface HeaderProps {
    
}


const LeftContent = ({title}) => {

    return (
            <VStack 
                w="full" 
                h="full" 
                p="10"  
                justifyContent='space-around'
                >
                <SlideFade delay={animationDelay} in={true} offsetY='100px'>
                    <Box textColor='white'>
                        <Card title={title} imgUrl={view_1.src} /> 
                    </Box>
                </SlideFade>
            </VStack>
    )
}

const RightContent = ({changeArea}) => {  
    const [mapChosen, setmapChosen] = React.useState("split")  
    return (
        <VStack 
            w="full" 
            h="full" 
            p="10"  
            justifyContent='space-around'
            alignItems='center'>
            <Flex w="full" paddingBottom={"10px"}>
              <Select style={{color: 'white', background: 'black'}} value={mapChosen} onChange={(e) => {
                changeArea(e.target.value)
                setmapChosen(e.target.value)}}>
                <option style={{backgroundColor: 'black'}} value='split'>Split</option>
                <option style={{backgroundColor: 'black'}} value='ascent'>Ascent</option>
              </Select>
            </Flex> 
            <SlideFade delay={animationDelay} in={true} offsetX='100px'>
                <Box>
                    <Mapper changeArea={changeArea} map_chosen={mapChosen} />
                </Box>
            </SlideFade>
                           
        </VStack>
    )
}

export const Main: React.FC<HeaderProps> = ({}) => {
    const [chosenArea, setChosenArea] = React.useState("split"); 
    return (
        <Flex h={{base: "auto", xl: '110vh'}}  bg={lighBG} backgroundImage={lightThemeGrad}  direction={{base: "column", md: "row"}}>
            <LeftContent title={chosenArea} /> 
            <RightContent changeArea={setChosenArea} />      
        </Flex> 
    );
}

