import React from 'react';

class TodoItem extends React.Component{
  render(){
    if(this.props.show) {
      return (
        <li>
          <span>{this.props.text}</span>
        </li>
      )
    }else{
      return null;
    }
  }
}

export default TodoItem;