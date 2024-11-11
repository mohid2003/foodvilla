import { useState } from "react"

const Profile =(props)=>{

    const [count, setCount] = useState(0)
    // console.log(count)
    return (
        <div>
            <h2>Profile Functional Component</h2>
            <p>{props.name}</p>
            <p>{count}</p>
            <button onClick={()=>setCount(Math.min(count+1,5))}>Add count</button>
            <button onClick={()=>setCount(Math.max(count-1, 0))}>Minus count</button>
            <button onClick={()=>setCount(0)}>Reset</button>
        </div>
    )
}

export default Profile