/* eslint-disable require-jsdoc */
import {ArrowLeftIcon, ArrowRightIcon} from "@chakra-ui/icons";
import {
  Flex,
  Box,
  Image,
  Text,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Select,
} from "@chakra-ui/react";
import React, {useEffect} from "react";

interface CardProps {
  imgUrl: string;
  title: string;
}

const Card: React.FC<CardProps> = ({imgUrl, title}) => {
  const [leftColor, setLeftColor] = React.useState("red");
  const [rightColor, setRightColor] = React.useState("red");
  const [, setimgSrc] = React.useState(imgUrl);

  const iconEnter = (e: any) => {
    if (!e) return;
    if (e.target.id == "LEFT_ICON") {
      setLeftColor("green");
      return;
    }
    if (e.target.id == "RIGHT_ICON") {
      setRightColor("green");
      return;
    }
  };

  const iconExit = (e: any) => {
    if (!e) return;
    if (e.target.id == "LEFT_ICON") {
      setLeftColor("red");
      return;
    }
    if (e.target.id == "RIGHT_ICON") {
      setRightColor("red");
      return;
    }
  };

  useEffect(() => {
    setimgSrc(imgUrl);
  }, [imgUrl]);

  return (
    <Flex
      w='full'
      h="full"
      alignItems="center" flexDirection={"column"} justifyContent="center">
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

          alt={"Picture of site"}
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
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}>
              <chakra.a display={"flex"}>
                <Icon id='LEFT_ICON'
                  as={ArrowLeftIcon}
                  onMouseEnter={(e) => iconEnter(e)}
                  onMouseLeave={(e) => iconExit(e)}
                  color={leftColor} h={7} w={7} alignSelf={"center"}
                />
              </chakra.a>
            </Tooltip>

            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated>
              {title}
            </Box>

            <Tooltip
              label="Next Image"
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}>
              <chakra.a display={"flex"}>
                <Icon id='RIGHT_ICON'
                  as={ArrowRightIcon}
                  onMouseEnter={(e) => iconEnter(e)}
                  onMouseLeave={(e) => iconExit(e)}
                  color={rightColor} h={7} w={7} alignSelf={"center"}
                />
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="lg">
                  Description
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Flex w="full" paddingBottom={"10px"}>
        <Select style={{color: "white", background: "black"}}>
          <option
            style={{backgroundColor: "black"}}
            value='option1'>See Line ups for this callout</option>
          <option
            style={{backgroundColor: "black"}}
            value='option2'>See callout area</option>
          <option
            style={{backgroundColor: "black"}}
            value='option3'>See Map info</option>
        </Select>
      </Flex>
    </Flex>
  );
};

export default Card;
