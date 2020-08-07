import React from 'react';
import logo from "./logo.svg";
import Button from "./Button";

import './App.css';
import './Button.css';


class App extends React.Component{

  constructor(props) {
    super(props)
  
    this.state = {
       newItem: "",
       list: []
    }
  }
  //methods
  addItem(todoValue){
    if(todoValue!==""){
      const newItem={
        id: Date.now(),
        value: todoValue,
        isDone: false
      };
      const list = [...this.state.list]; //copying the before list
      list.push(newItem);//appending done
      this.setState({ //update state using setState method
        list,
        newItem: ""
      });
    }
  }
  
  deleteItem(id){
    const list = [...this.state.list];
    const updatelist = list.filter(item => item.id!==id);
    this.setState({ //update state using setState method
      list:updatelist    
    });
  }

  updateInput(input){
    this.setState({
      newItem: input
    });
  }

  handleCheck(item){

    if(item.isDone===false){
      item.isDone=true
    }
    else{
      item.isDone=false
    }
  }


  render(){
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo"/>
      </header>
      <div className="App-box">
      <h1 className="App-title" style={{color:"white"}} >TO-DO Application</h1>
      <div className="container">
      Add an item.....
      <br/>
      <br/>
      <input 
      type="text" 
      className="input-text" 
      placeholder="Write a Todo"
      required
      value={this.state.newItem}
      onChange={e=>this.updateInput(e.target.value)}/>
      <button className="button add-btn"
      onClick={()=>this.addItem(this.state.newItem)}
      disabled={!this.state.newItem.length}>
      Add a To-Do</button>
      <div className="list">
      <ul>
      {this.state.list.map(item => {
        return(
          <li key={item.id}>
          <input 
          type="checkbox"
          name="isDone"
          checked={item.isDone}
          onChange={()=>this.handleCheck(item)
          }
          />
          {item.value}
          <button className="button btn"
          onClick={()=>this.deleteItem(item.id)}>Delete</button>
          </li>
        );
      })}
        <li>
        <input type="Checkbox" name="" id=""/>
        Base to-do
        <Button title="Delete" />
        </li>

      </ul>
      </div>
      </div>
      </div>
    </div>

  );
  }
}

export default App;
