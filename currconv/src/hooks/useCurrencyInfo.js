import {useState,useEffect} from "react"
import {currencyData} from "./currencyData"

export function useCurrencyInfo(currency){
    const [data,setdata] = useState({})

    useEffect(()=>{
        let res = currencyData[currency.toLowerCase()]
        setdata(res)
    },[currency])
    return data
}

