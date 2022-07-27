import { Center, Text, CircularProgress, VStack } from "@chakra-ui/react";
import React from "react";
import useFetch from "../hooks/useFetchData";

interface exampleProps {

}

const url = "/api/firebaseExample";

// To view this go to http://localhost:3000/firebaseExample

const example: React.FC<exampleProps> = ({}) => {
  const {loading, data, error} = useFetch(url); 

  if(loading) {
    return <Center 
      h="100vh" 
      textColor='white' 
      fontSize='xl'> 
      <CircularProgress m='auto' isIndeterminate color='green.300' />  
    </Center>;
  }

  if(!loading && !data) {
    return <Center 
      h="100vh" 
      textColor='white' 
      fontSize='xl'> 
        Error 404: No Data Was Fetched. :{"("} Try again. 
    </Center>;
  }
  return (
    <Center h="100vh" >
      <VStack>
        {data && !error && data.map((quote: any, i: number) => {
          return <Text 
            key={`#qoute${i}`}
            color={"white"}>
            {quote.quote}
            - {quote.author}
          </Text>;
        })}   
      </VStack>
    </Center> 
  );
};

export default example; 