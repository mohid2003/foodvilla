import { useEffect, useState } from "react"

const useOnline =()=>{
    const [isOnline, setIsOnline] = useState(navigator.onLine)

    useEffect(()=>{
        const handleOnline = ()=>{
            setIsOnline(true);
            console.log(true);
        }
        const handleOffline =()=>{
            setIsOnline(false);
            console.log(false);
        }

        window.addEventListener("online",handleOnline)
        window.addEventListener("offline",handleOffline)

        return ()=>{
            window.removeEventListener("online",handleOnline)
            window.removeEventListener("offline",handleOffline)
        }

    },[])
    return isOnline;
}

export default useOnline