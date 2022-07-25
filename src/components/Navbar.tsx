import {Box, Text, Button, Image, Stack, Link, Flex} from "@chakra-ui/react";
import React, {useState} from "react";
import Img from "../utils/logo.png";

interface NavbarProps {

}

interface MenuToggleProps {
    toggle: any,
    isOpen: boolean
}

interface MenuItemProps {
    children: any,
    isLast: boolean,
    to: string
}

interface MenuLinksProps {
    isOpen: boolean
}

interface NavbarContainerProps {
    children: any,
}

const Logo = (props) => {
  return (
    <Box {...props} flexDirection='row' display='flex' justifyContent='center' >

      <Image
        borderRadius='full'
        h='10'
        w='15'
        align='center'
        src={Img.src}
        pr='1'
        alt='Company Logo'/>
      <Flex align='center'>
        <Text align='center' fontSize='l' textColor="white" fontWeight='bold'>
                Pings
        </Text>
      </Flex>

    </Box>
  );
};

const MenuToggle: React.FC<MenuToggleProps> = ({toggle, isOpen}) => {
  return (
    <Box display={{base: "block", md: "none"}} onClick={toggle}>
      {isOpen ? <Text> Close Menu </Text> : <Text> Open Menu </Text> }
    </Box>
  );
};

// eslint-disable-next-line no-unused-vars
const MenuItem: React.FC<MenuItemProps> =
    ({children, isLast, to="/", ...rest}) => {
      return (
        <Link href={to}>
          <Text display='block' {...rest}>
            {children}
          </Text>
        </Link>
      );
    };

const MenuLinks: React.FC<MenuLinksProps> = ({isOpen}) => {
  return (
    <Box
      display={{base: isOpen ? "block" : "none", md: "block"}}
      flexBasis={{base: "100%", md: "auto"}}

    >
      <Stack
        spacing={8}
        align='center'
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "column", "row", "row"]}
        pt={[4, 4, 0, 0]}>
        <Button
          colorScheme='red'
          textColor='white'
          fontWeight='bolder'
          bg="#D5212E"> Submit a callout  </Button>
      </Stack>
    </Box>
  );
};


const NavbarContainer: React.FC<NavbarContainerProps> =
    ({children, ...props}) => {
      return (
        <Flex
          as="nav"
          align="center"
          justify="space-around"
          position="relative"
          top={0}
          zIndex={1}
          wrap='wrap'
          w="100%"
          p={5}
          px={1}
          bg='#000000'

          opacity={.9}
          color={["white"]}
          {...props}
        >
          {children}
        </Flex>
      );
    };


export const Navbar: React.FC<NavbarProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <NavbarContainer>
      <Logo
        w="100px"
        color={["white", "white", "primary.500", "primary.500"]}
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavbarContainer>
  );
};
