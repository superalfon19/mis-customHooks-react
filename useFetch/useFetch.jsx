import { useState, useEffect } from "react"


const localCache = {}

const useFetch = (url) => {

   const [state, setState] = useState({
    date: null,
    isLoading: true,
    hasError: false,
    error: null
   }) 

    useEffect(()=>{
      getFetch();
      //eslint-disable-next-line react-hooks/exhaustive-deps  
    },[url]);

   const setLoadingState = ()=>{
    setState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    })
   }
   
   async function getFetch(){

    if (localCache[url]) {

      setState({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: null
      })
      return
    }
    setLoadingState()

    const resp = await fetch(url)

    //Sleep

    await new Promise(resolve => setTimeout(resolve, 1500))

    if(!resp.ok){
        setState({
            data: null,
            isLoading: false,
            hasError: true,
            error: {
                code: resp.status,
                message: resp.stastus.Text
            }
        });
        return;
    }
    const data = await resp.json();

    setState({
        data: data,
        isLoading: false,
        hasError: false,
        error: null

    })
    console.log({data})

    localCache[url] = data

    console.log(localCache)
   }

   // Manejo de cache
   

   


  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  }
}

export default useFetch