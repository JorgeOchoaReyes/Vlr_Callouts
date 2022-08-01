/* eslint-disable camelcase */
import React from "react";
import {Flex, Select, Button, ButtonGroup, Slide} from "@chakra-ui/react";
import view_1 from "../utils/asite.png";
import {Mapper} from "../components/Mapper";
import {Sidebar} from "./Sidebar";
import {HamburgerIcon} from "@chakra-ui/icons";
import useDeviceType from "../hooks/useDeviceType";

interface HeaderProps {

}

interface LeftProps {
    title: string;
    sidebarOpen: boolean,
}

interface RightProps {
    changeArea: any,
    mapChosen: string,
    sidebarOpen: boolean,
    setSidebarOpen: any
}

const LeftContent: React.FC<LeftProps> = ({title, sidebarOpen}) => {
  const {isDesktop} = useDeviceType();
  return (
    <Flex style={{
      paddingBottom: "25px",
      paddingLeft: isDesktop ? sidebarOpen ? "80px" : "0px" : 0}}>
      <Slide
        style={{position: "static"}}
        direction={isDesktop ? "left" : "top"} in={sidebarOpen}>
        <Sidebar sidebarOpen={sidebarOpen} img={view_1.src} title={title} />
      </Slide>
    </Flex>
  );
};

const RightContent: React.FC<RightProps> =
    ({changeArea, mapChosen, sidebarOpen, setSidebarOpen}) => {
      const {isDesktop} = useDeviceType();
      return (
        <Flex
          transition={"1s"}
          h="90%"
          paddingLeft={isDesktop ? sidebarOpen ? "80px" : "0px" : 0}>
          <Mapper changeArea={changeArea} map_chosen={mapChosen} setSidebar={setSidebarOpen}/>
        </Flex>
      );
    };

export const Main: React.FC<HeaderProps> = ({}) => {
  const [chosenArea, setChosenArea] = React.useState("split");
  const [mapChosen, setmapChosen] = React.useState("split");
  const [sidebar, setSidebar] = React.useState(false);
  return (
    <>
      <Flex>
        <ButtonGroup isAttached w="75%" padding={"40px"} margin="auto">
          <Button
            style={{borderRadius: 0}} onClick={() => setSidebar(!sidebar)}>
            <HamburgerIcon /> </Button>
          <Select
            style={{color: "white", borderRadius: 0, background: "black"}}
            value={chosenArea} onChange={(e) => {
              setChosenArea(e.target.value);
              setmapChosen(e.target.value);
            }}>
            <option
              style={{backgroundColor: "black"}} value='ascent'>Ascent</option>
            <option
              style={{backgroundColor: "black"}} value='icebox'>Icebox</option>
            <option
              style={{backgroundColor: "black"}} value='pearl'>Pearl</option>
            <option
              style={{backgroundColor: "black"}} value='split'>Split</option>
          </Select>
        </ButtonGroup>
      </Flex>
      <Flex
        justifyContent={"center"}
        align={"center"}
        direction={{base: "column", md: "row"}}
        h={{base: "80vh", md: "100vh"}}>
        <LeftContent sidebarOpen={sidebar} title={chosenArea} />
        <RightContent
          sidebarOpen={sidebar} setSidebarOpen={setSidebar}
          changeArea={setChosenArea} mapChosen={mapChosen} />
      </Flex>
    </>
  );
};

