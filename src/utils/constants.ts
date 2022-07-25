import ascentData from './ascent_map.json';
import splitData from './split_map.json';
import pearlData from './pearl_map.json';
import ascentImage from './ascent.png';
import splitImage from './split.png';
import pearlImage from './pearl.png';
import { MapType } from '../types';
import { MapAreas } from 'react-img-mapper';

export const animationDelay = 0;
export const lightThemeGrad = "linear-gradient(to bottom, #181b1c 0%, #000000 74%)"
export const lighBG = "#2d3436";
export const darkThemeGrad = "linear-gradient(to right, #240a4e, #100128)"

export const darkTheme = "#19033c"
export const darkThemeGrad_TB = "linear-gradient(to bottom, #240a4e, #100128)"
export const textColor = "white"


export const data = {
    ascent: {data:{name: "Ascent", areas: ascentData as MapAreas[]}, image: ascentImage.src },
    split: {data: {name: "Split", areas: splitData as MapAreas[]}, image: splitImage.src },
    pearl: {data: {name: "Pearl", areas: pearlData as MapAreas[]}, image: pearlImage.src}
}
