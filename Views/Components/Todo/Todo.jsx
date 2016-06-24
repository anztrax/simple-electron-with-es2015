import React from 'react';
import TodoListItem from './TodoListItem';
import TodoFilter from './TodoFilter';

class Todo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todoItems : [
        {text : 'this is test', show : true },
        {text : 'this is test 2', show : true }
      ]
    };
  }

  onChangeTextInput(searchText){
   const filteredData = this.state.todoItems.map((data)=>{
      const text = data.text;
      data['show'] = false;

      if(text.indexOf(searchText) > -1){
        data['show'] = true;
      }

      return data;
    });

    this.setState({todoItems : filteredData});
  }

  render(){
    return (
      <div>
        <h2>Very Simple Todo</h2>
        <TodoFilter onChangeTextInput={this.onChangeTextInput.bind(this)} />
        <TodoListItem items={this.state.todoItems} />
      </div>
    )
  }
}

export default Todo;