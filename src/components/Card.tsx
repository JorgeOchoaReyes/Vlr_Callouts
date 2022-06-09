import { ArrowLeftIcon, ArrowRightIcon, ChevronDownIcon } from '@chakra-ui/icons';
import {
    Flex,
    Circle,
    Box,
    Image,
    Text,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    Menu,
    Button,
    MenuButton,
    MenuItem,
    MenuList,
    Select,
    Stack,
  } from '@chakra-ui/react';
import React, { useEffect } from 'react'   

  
  interface RatingProps {
    rating: number;
    numReviews: number;
  }

  
  function Card({imgUrl}) {
    
    const [leftColor, setLeftColor] = React.useState('red');
    const [rightColor, setRightColor] = React.useState('red'); 
    const [imgSrc, setimgSrc] = React.useState(imgUrl)

    const IconEnter = (e: any) => {
      if(!e) return;
      if(e.target.id == 'LEFT_ICON') {
        setLeftColor('green');
        return;
      } 
      if(e.target.id == 'RIGHT_ICON') {
        setRightColor('green');
        return; 
      }
    } 

    const IconExit = (e: any) => {
      if(!e) return;
      if(e.target.id == 'LEFT_ICON') {
        setLeftColor('red');
        return;
      } 
      if(e.target.id == 'RIGHT_ICON') {
        setRightColor('red');
        return; 
      }
    }

    useEffect(() => {
      setimgSrc(imgUrl); 
    }, [imgUrl])

    return (
      <Flex w='full' h="full" alignItems="center" flexDirection={"column"} justifyContent="center">
        <Flex w="full" paddingBottom={"10px"}>
          <Select placeholder='Select option'>
            <option value='option1'>See Line ups for this callout</option>
            <option value='option2'>See callout area</option>
            <option value='option3'>See Map info</option>
          </Select>
        </Flex> 
        <Box
          bg={"#1a202c"}
          maxW="md"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          >

          <Image
            src={imgUrl}
            h="auto"
            w='auto'
   
            alt={`Picture of site`}
            roundedTop="lg"
          />
  
          <Box p="6">

            <Box d="flex" alignItems="baseline">
              <Text> </Text>
            </Box>

            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Tooltip
                label="Previous Image"
                bg="white"
                placement={'top'}
                color={'gray.800'}
                fontSize={'1.2em'}>
                <chakra.a  display={'flex'}>
                  <Icon id='LEFT_ICON' 
                    as={ArrowLeftIcon}
                    onMouseEnter={(e) => IconEnter(e)} 
                    onMouseLeave={(e) => IconExit(e)} 
                    color={leftColor} h={7} w={7} alignSelf={'center'} 
                  />
                </chakra.a>
              </Tooltip>

              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated> 
                A site
              </Box>

              <Tooltip
                label="Next Image"
                bg="white"
                placement={'top'}
                color={'gray.800'}
                fontSize={'1.2em'}>
                <chakra.a  display={'flex'}>
                  <Icon id='RIGHT_ICON' 
                    as={ArrowRightIcon} 
                    onMouseEnter={(e) => IconEnter(e)} 
                    onMouseLeave={(e) => IconExit(e)} 
                    color={rightColor} h={7} w={7} alignSelf={'center'} 
                  />
                </chakra.a>
              </Tooltip>
            </Flex>
  
            <Flex justifyContent="space-between" alignContent="center">
              <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                <Box as="span" color={'gray.600'} fontSize="lg">
                  Here
                </Box>
              </Box>
            </Flex>

          </Box>
        </Box>
      </Flex>
    );
  }
  
  export default Card;