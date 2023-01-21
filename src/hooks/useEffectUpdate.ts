import { useEffect, useRef } from "react"

export const useEffectUpdate = (callBack:any, dependencies:any) => {
    
    const isFirst = useRef(true)

    useEffect(()=>{
        if (isFirst.current) {
            isFirst.current = false
            return
        }   
        callBack()
    }, dependencies)
    
}