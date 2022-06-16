import { StaticImageData } from "next/image"

export interface MapType {
    id: String,
    fillColor: string,
    strokeColor: string,
    title: string,
    name: string,
    coords: number[],
    poly: number[][],
    shape: string
}

export interface MapData {
    data: Object[],
    image: StaticImageData
}