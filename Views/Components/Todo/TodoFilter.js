import React from 'react';

class TodoFilter extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){

  }

  onChangeTextInput(event){
    const value = event.target.value;
    this.props.onChangeTextInput(value);
  }

  render(){
    return (
      <div>
        <input type="text" placeholder="search your todo here" onChange={this.onChangeTextInput.bind(this)}  />
      </div>
    )
  }
}

export default TodoFilter;