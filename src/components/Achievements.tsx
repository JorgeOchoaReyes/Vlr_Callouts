import { Box, Heading, Image, SlideFade, Text, VStack, Stack, Flex} from '@chakra-ui/react';
import React from 'react'
import { darkTheme } from '../Util/constants';

interface AchievementsProps {

}

const Milestones = () => {
    return (
        <Box>
            <div> Image of trophies that your team has obtained </div>
        </Box>
    )
}

export const Achievements: React.FC<AchievementsProps> = ({}) => {
    return (
        <Flex h={{base: "auto"}} py={20} bg={darkTheme} w="full" justifyContent='center' textColor="white" direction={{base: "column", md: "row"}} >
            <VStack >
                <Heading paddingTop={10}> Teams </Heading>
            </VStack>
        </Flex> 
    );
}