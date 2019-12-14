import React, {Component} from 'react';
import Todos from './todos';
import AddTodo from './AddForm';

class App extends Component {
  state = {
    todos :[ 
      {id:1, content: 'buy some melk'},
      {id:2 , content: ' play a game'}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({ todos });
  }

  addTodo = (todo) => {
    todo.id = this.state.todos.length + 1;
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }

render(){
    return (
      <div className="todo-app container">
       <h1 className="center blue-text">to do :</h1>
       <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
       <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
