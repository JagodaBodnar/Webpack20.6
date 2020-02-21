import React from 'react';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
    }

    render() {
        return (
            <div className={style.TodoApp}>
                <Title title={"Todo"} listCount={this.state.data.length}/>
                <TodoList />
            </div>
        );
    }
}

export default App;