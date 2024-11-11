import React from 'react'
import ProfileClass2 from './ProfileClass2'
class ProfileClass extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            count : 0,
        }

        console.log("constructor")
    }

    componentDidMount(){
        console.log("componentDidMount")
    }

    /*
    constructor
    render
    child constructor
    child render
    child's child construcor
    childs child render
    child child didmout
    childs didmout
    didmout



    */

    render(){
        console.log("render")
        const {count} = this.state
        return (
            <div>
                <h2>Profile Class Component</h2>
                <p>{this.props.name}</p>
                <p>{count}</p>
                <button onClick={()=>{
                    this.setState({
                        count: Math.min(count+1,5)
                    })
                }}>Add Count</button>
                <button onClick={()=>{
                    this.setState({
                        count: Math.max(count-1, 0)
                    })
                }}>Minus Count</button>
                <button onClick={()=>{
                    this.setState({
                        count: 0
                    })
                }}>Reset Count</button>
            <ProfileClass2 />
            </div>

        )
    }
}

export default ProfileClass;