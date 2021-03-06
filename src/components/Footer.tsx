import {
  ButtonGroup,
  Box,
  Divider,
  IconButton,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import {FaGithub} from "react-icons/fa";
import {textColor} from "../utils/constants";


export const Footer = () => (
  <Box
    maxWidth="full" as="footer" bg='#1e1e1e' bottom={0} textColor={textColor} >
    <Divider />
    <Stack
      paddingRight={1}
      pt="8"
      pb="12"
      justify="space-evenly"
      direction={{base: "row", md: "row"}}
      align="center"
    >
      <ButtonGroup variant="ghost">
        <Flex align='center'>
          <Text align='center'> Check Out The Github and contribute!  </Text>
        </Flex>

        <Flex align='center'>
          <IconButton 
            as="a" 
            href="https://github.com/JorgeOchoaReyes/Vlr_Callouts" 
            aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
        </Flex>

      </ButtonGroup>
    </Stack>
  </Box>
);
