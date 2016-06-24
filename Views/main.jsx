import React from 'react';
import Todo from './Components/Todo/Todo.jsx';

class Main extends React.Component{
  render(){
    return (
      <div>
        <h3>Hello from React and electron with es2015 :)</h3>
        <Todo />
      </div>
    )
  }
}

export default Main;