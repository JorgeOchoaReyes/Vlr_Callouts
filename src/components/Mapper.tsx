/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import {Box} from "@chakra-ui/react";
import ImageMapper, {CustomArea} from "react-img-mapper";
import {data} from "../utils/constants";
import {MapType} from "../types";
import React from "react";
import useDeviceType from "../hooks/useDeviceType";
import useWindowSize from "../hooks/useWindowSize";

interface MapperProps {
    map_chosen: string,
    changeArea: any,
    setSidebar: any
}

export const Mapper: React.FC<MapperProps> = (
  {map_chosen, changeArea, setSidebar}
) => {
  const {isDesktop} = useDeviceType();
  const {width} = useWindowSize();
  return (
    <Box height={`${(width * (isDesktop ? 47 : 40))/100}px`}>
      <ImageMapper
        map={data[map_chosen]["data"]}
        responsive={true}
        parentWidth={(width * (isDesktop? 60 : 100))/100}
        src={data[map_chosen]["image"]}
        onClick={(e: CustomArea & MapType) => {
          changeArea(e.title); 
          setSidebar(true);
        }}
      />
    </Box>
  );
};
