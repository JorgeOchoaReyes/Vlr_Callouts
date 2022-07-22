import { VStack, SlideFade, Box, Image } from "@chakra-ui/react"
import { animationDelay } from "../Util/constants"
import ImageMapper, { CustomArea } from 'react-img-mapper';
import { data } from "../Util/constants";
import { MapType } from "../types";
import useDeviceType from "../Util/useDeviceType";
import useWindowSize from "../Util/useWindowSize";

export const Mapper = ({map_chosen, changeArea}) => {
    const {isDesktop} = useDeviceType(); 
    const {width} = useWindowSize();
    return (
        <Box height={`${(width * (isDesktop ? 47 : 70))/100}px`}> 
            <ImageMapper   
                map={data[map_chosen]["data"]}
                responsive={true}
                parentWidth={(width * (isDesktop? 62 : 100))/100}
                src={data[map_chosen]["image"]} 
                onClick={(e: CustomArea & MapType) => changeArea(e.title)}
            />
        </Box>            
    )
}
