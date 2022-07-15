import { useEffect }  from "react";




export default function useUpdateLogger() {   

    useEffect(()=>{
       console.log('value')
    }, []);
}