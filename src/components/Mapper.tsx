import { VStack, SlideFade, Box, Image } from "@chakra-ui/react"
import { animationDelay } from "../Util/constants"
import ImageMapper from 'react-img-mapper';
import data from '../Util/data.json';

export const Mapper = ({map_img}) => {
    let mapData = {
        name: "example",
        areas: data
    }
    
    return (
  
        <ImageMapper   
                map={mapData}
                natural={true}
                src={map_img} 
        />
            
    )
}