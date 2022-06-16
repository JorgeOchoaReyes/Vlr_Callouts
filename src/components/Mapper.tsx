import { VStack, SlideFade, Box, Image } from "@chakra-ui/react"
import { animationDelay } from "../Util/constants"
import ImageMapper, { CustomArea } from 'react-img-mapper';
import { data } from "../Util/constants";
import { MapType } from "../types";

export const Mapper = ({map_chosen, changeArea}) => {
    return (
        <ImageMapper   
                map={data[map_chosen]["data"]}
                responsive={true}
                parentWidth={650}
                src={data[map_chosen]["image"]} 
                onClick={(e: CustomArea & MapType) => changeArea(e.title)}
        />
            
    )
}