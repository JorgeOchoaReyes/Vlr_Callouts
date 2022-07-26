import { Center, Text, CircularProgress, VStack } from "@chakra-ui/react";
import React from "react";
import useFetch from "../hooks/useFetchData";

interface exampleProps {

}

// To view this go to http://localhost:3000/example

const example: React.FC<exampleProps> = ({}) => {
  const {loading, data, error} = useFetch(); 

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
        {data && !error && data.map((user) => {
          return <Text 
            key={`#userId${user.id}`}
            color={"white"}>
            User Name: {user.name} {" "}
            User Id: {user.id} 
          </Text>;
        })}   
      </VStack>
    </Center> 
  );
};

export default example; 