import { VStack, SlideFade, Box, Image } from "@chakra-ui/react"
import { animationDelay } from "../Util/constants"
import ImageMapper, { CustomArea } from 'react-img-mapper';
import data from '../Util/split_map.json';
import { MapType } from "../types";

export const Mapper = ({map_img, changeArea}) => {
    let mapData = {
        name: "example",
        areas: data
    }
    
    return (
  
        <ImageMapper   
                map={mapData}
                responsive={true}
                parentWidth={650}
                src={map_img} 
                onClick={(e: CustomArea & MapType) => changeArea(e.title)}
        />
            
    )
}