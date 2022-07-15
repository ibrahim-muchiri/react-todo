import { useEffect }  from "react";




export default function useUpdateTodos() { 

    useEffect(()=>{
       console.log('value')
    }, []);
}