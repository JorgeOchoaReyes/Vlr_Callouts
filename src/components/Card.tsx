import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
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
  } from '@chakra-ui/react';
import split from '../Util/asite.png'
  

  
  interface RatingProps {
    rating: number;
    numReviews: number;
  }

  
  function Card() {
    return (
      <Flex p={50} w='full' h="full" alignItems="center" justifyContent="center">
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          maxW="md"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative">
  
          <Image
            src={split.src}
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
                  <Icon as={ArrowLeftIcon} color='red' h={7} w={7} alignSelf={'center'} />
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
                  <Icon as={ArrowRightIcon} color='red' h={7} w={7} alignSelf={'center'} />
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