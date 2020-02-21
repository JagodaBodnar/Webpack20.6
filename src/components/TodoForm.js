import React from 'react'
import shortid from 'shortid'
import style from './TodoForm.css'

export default class TodoForm extends React.Component{
    state = {
        text: " "
    };
    handleChange = event =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    handleSubmit = (event) =>{
    event.preventDefault(); 
    this.props.onSubmit({
        id: shortid.generate(),
        text: this.state.text,
        complete: false
    });
    this.setState({
        text: ''
    });
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input className={style.input} name="text" placeholder="todo..." value={this.state.text} onChange={this.handleChange} />
                <button className={style.addButton} onClick={this.handleSubmit}><i class="fas fa-plus"></i></button>
            </form>
        ) 
    }
}