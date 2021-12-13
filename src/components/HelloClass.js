import React, { Component } from 'react'

class HelloClass extends Component {
    myFunction=()=>{
        console.log(this.props.age)
    }
    
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={this.myFunction}>Click Me!!</button>
                <p>I am the class component!! I loke the number {this.props.age}!!</p>
            </div>
        )
    }
}
export default HelloClass;
