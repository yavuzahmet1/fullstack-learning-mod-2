import React, { Component } from 'react'

export default class ClassComp extends Component {

    constructor(props){
        super(props)
        this.state={counter:0}
        this.azalt=this.azalt.bind(this)

    }

    //!1- En kolay bind işlemi arrow function ile
    arttir=()=>{
        console.log(this)
        this.setState({counter:this.state.counter+1})
    }

    azalt(){
        console.log(this)
        this.setState({counter:this.state.counter-1})
    }

  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <p>Count:{this.state.counter}</p>
        <button className="btn btn-primary" onClick={this.arttir}  >Arttır</button>

        {/* 2- yöntem binding için */}
        {/* <button className="btn btn-danger" onClick={this.azalt.bind(this)}  >Azalt</button> */}

        {/* 3.constructor içinde binding işlemi */}
        <button className="btn btn-danger" onClick={this.azalt}  >Azalt</button>
        
      </div>
    )
  }
}
