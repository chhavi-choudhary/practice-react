import React, { Component } from 'react'

class HelloClass extends Component {
    
    render() {
        console.log(this.props)
        return (
            <div>
                <p>I am the class component!! I loke the number {this.props.age}!!</p>
            </div>
        )
    }
}
export default HelloClass;
