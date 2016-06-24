import React from 'react';
import TodoItem from './TodoItem.jsx';

class TodoListItem extends React.Component{
  _generateTodoItems(){
    const listOfTodoItems = this.props.items.map((data)=>{
      return <TodoItem text={data.text} show={data.show} />
    });
    return listOfTodoItems;
  }

  render(){
    return (
      <ul>
        {this._generateTodoItems()}
      </ul>
    )
  }
}

export default TodoListItem;