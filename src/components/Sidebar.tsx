import {ArrowBackIcon, ArrowForwardIcon} from "@chakra-ui/icons";
import {
  Flex,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import React from "react";
import useDeviceType from "../hooks/useDeviceType";
import useWindowSize from "../hooks/useWindowSize";

interface SidebarProps {
    img: any,
    title: string,
    sidebarOpen: boolean
}

export const Sidebar: React.FC<SidebarProps> = ({img, title, sidebarOpen}) => {
  const {isDesktop} = useDeviceType();
  const {width} = useWindowSize();
  return (
    <Flex
      flexDir={"column"}
      justifyContent="space-between"
      align='center'
      border="solid 1px white"
      borderRadius={"10px"}
      bg={"#1a202c"}
      textColor={"white"}
      display={sidebarOpen ? "flex": "none"}
      height={sidebarOpen ? `${(width * (isDesktop ? 30: 50))/100}px` : "0px"}
      fontSize={sidebarOpen ? "24px" : "0px"}
      w={sidebarOpen ? `${(width * (isDesktop ? 25 : 40))/100}px` : "0px"}>
      <Image
        src={img}
        w="100%"
        alt={"Picture of site"}
        roundedTop="lg"
      />
      <Text fontSize={{base: "12px", md: "24px"}}> {title} </Text>
      <Flex>
        <Text fontSize={{base: "10px", md: "20px"}}> Description: </Text>
      </Flex>
      <Flex w="100%" justifyContent={"space-between"}>
        <Button
          colorScheme={"whiteAlpha"}
          bg={"red"} border="solid 1px white"
          w={`${(width * (isDesktop ? 4 : 6)/100)}px`}
          h={`${(width * (isDesktop ? 4 : 6)/100)}px`}>
          <ArrowBackIcon w={8} h={8} /> </Button>
        <Button
          colorScheme={"whiteAlpha"}
          bg={"red"} border="solid 1px white"
          w={`${(width * (isDesktop ? 4 : 6)/100)}px`}
          h={`${(width * (isDesktop ? 4 : 6)/100)}px`}>
          <ArrowForwardIcon w={8} h={8} /> </Button>
      </Flex>
    </Flex>
  );
};
