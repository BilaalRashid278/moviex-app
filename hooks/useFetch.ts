import { fetchDataFromApi, RequestInit } from "@/api/urls";
import { useEffect, useState } from "react";

const useFetch = (url : string, options : RequestInit) => {
    const [loading,setLoading] = useState<boolean>(false);
    const [error,setError] = useState<string | null>(null);
    const [data,setData] = useState<any>(null);

    useEffect(() => {
        (async function(){
          setLoading(true);
          const data = await fetchDataFromApi(url, options);
          if(data === 'error') setError("Oops Someting's went wrong");
          setData(data);
          setLoading(false);
        })();
    },[url]);
    return {loading, error, data}
}

export default useFetch