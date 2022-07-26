import React, { useEffect } from "react";

const url = "/api/example"; 

// eslint-disable-next-line require-jsdoc
export default function useFetch() {
  const [loading, setLoading] = React.useState<boolean>(false); 
  const [data, setData] = React.useState<any>(); 
  const [error, setError] = React.useState<any>(); 

  const fetchData = async (url: string) => {
    setLoading(true); 
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(data); 
      if(data === null) setError(true); 
      setLoading(false);
      return data; 
    }
    catch (e) {
      setError(true);
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchData(url); 
  }, []);

  return {
    loading, 
    data, 
    error
  };
}
