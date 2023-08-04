import React, { Component } from 'react'
import Inputbox from './inputbox'
export default class Todolist extends Component {

    constructor() {
        super()
        this.state = ({
            todos: [],
            value: "",
        });
    
    }

    onChange = (e) => {
    this.setState({ value: e.target.value })
    
    }
    
    addTask = () =>{
        this.setState({ todos: [...this.state.todos, {name:this.state.value, isActive:false }], value:''})
    }

    editTask = (index, res) => {

        let newArray = this.state.todos
        let abc = newArray.splice(0, index)
        console.log(newArray)
        console.log(abc)
        this.setState({ todos: abc , value:newArray.toString()})
    }

    deleteTask = (index) => {
         let newArray = this.state.todos
        let abc = newArray.splice(0, index)
        this.setState({ todos: abc })
    }

    toggleButton = (index) => {
        let newArray = this.state.todos
        newArray[index].isActive =  !newArray[index].isActive
        console.log(newArray)
        this.setState({todos:newArray})
        
    }

render() {
    return (
            <div style={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
                <div className='input-container'>
                    <h1>To-do-list</h1>
                    <Inputbox value={this.state.value} onChange={(e) => this.onChange(e)}></Inputbox>
                    <button disabled={this.state.value == ''} style={{ width: '50px' }} type="button" onClick={this.addTask}>Add</button>
                    {this.state.todos.map((res,index)=>{
                        return (
                            <div key={index} style={{ display: 'flex', gap: '9px' }}>
                                {res.name} 
                                <button onClick={()=>this.toggleButton(index)}>{res.isActive ? "inActive":"Active"}</button>
                                <button disabled={!(this.state.value=='')} style={{ width: '50px' }} type="button" onClick={()=>this.editTask(index, res)}>Edit</button>
                                <button style={{ width: '50px' }} type="button" onClick={()=>this.deleteTask(index, res)}>Delete</button>
                            </div>)
                    })}
                    
                </div>
            <div className='input-container'>
                    <h1>Search</h1>
                    <Inputbox value={this.state.value} onChange={(e) => this.onChange(e)}></Inputbox>
                    
                </div>
        </div>
        

    )
}
}
