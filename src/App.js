import React, {Component} from "react";
import './App.css';
import AddExp from "./components/AddExp";
import AddEd from "./components/AddEd";
import AddSkills from "./components/AddSkills";
import AddHeader from "./components/AddHeader";

class App extends Component {
  constructor() {
    super ();

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitTask = this.onSubmitTask.bind(this);

    this.state = {
      title: "",
      date: "",
      desc:"",
      expItems:[{title:"Example Title", date:"02/12/1212", desc:"Example Desc"}],
      edItems:[{title:"Example Education", date:"12/12/1212", desc:"Example Desc"}],
      skillItems:[{title:"Example Skill", desc:"Example Desc"}],
      header:{}
    };
  }

handleChange = (e) => {
  this.setState({
    [e.target.id]: e.target.value,
  });
  console.log(e.target.id +" is: "+e.target.value);
};

onSubmitTask = (e) => {
  e.preventDefault();
  let newItem= {
    title: this.state.title,
    date: this.state.date,
    desc: this.state.desc
  }

if (e.target.className === "exp") {
  this.setState({
    expItems: [...this.state.expItems, newItem],
    title:"",
    date:"",
    desc:"",
  });
}
else if (e.target.className === "ed") {
  this.setState({
    edItems: [...this.state.edItems, newItem],
    title:"",
    date:"",
    desc:"",
  });
}
else if (e.target.className === "skill") {
  this.setState({
    skillItems: [...this.state.skillItems, newItem],
    title:"",
    desc:"",
  });
}
};
 
  defaultExp = () => {
    return (
      <form onSubmit={this.onSubmitTask} className="exp">
        <div className="item">
            <input id="title" type="text" placeholder="Experience" onChange={this.handleChange} value={this.state.title}></input>
            <input id="date" type="date" onChange={this.handleChange} value={this.state.date}></input>
            <input id="desc" placeholder="Description" onChange={this.handleChange} value={this.state.desc}></input>
            <button className="inputSubmit" type="submit">Submit</button>
        </div>
      </form>
    );
  };

  defaultEd = () => {
    return (
      <form onSubmit={this.onSubmitTask} className="ed">
        <div className="item">
            <input id="title" type="text" placeholder="Education" onChange={this.handleChange} value={this.state.title}></input>
            <input id="date" type="date" onChange={this.handleChange} value={this.state.date}></input>
            <input id="desc" placeholder="Description" onChange={this.handleChange} value={this.state.desc}></input>
            <button className="inputSubmit" type="submit">Submit</button>
        </div>
      </form>
    );
  };

  defaultSkills = () => {
    return (
      <form onSubmit={this.onSubmitTask} className="skill">
        <div className="item">
            <input id="title" type="text" placeholder="Skill" onChange={this.handleChange} value={this.state.title}></input>
            <input id="desc" placeholder="Description" onChange={this.handleChange} value={this.state.desc}></input>
            <button className="inputSubmit" type="submit">Submit</button>
        </div>
      </form>
    );
  };

  defaultHeader = () => {
    return (
      <form onSubmit={this.onSubmitTask} className="ed">
        <div className="item">
            <input id="title" type="text" placeholder="Education" onChange={this.handleChange} value={this.state.title}></input>
            <input id="date" type="date" onChange={this.handleChange} value={this.state.date}></input>
            <input id="desc" placeholder="Description" onChange={this.handleChange} value={this.state.desc}></input>
            <button className="inputSubmit" type="submit">Submit</button>
        </div>
      </form>
    );
  };

render () { 
    return (
    <div id="content">

      <div id="header">
        <AddHeader header={this.state.header}/>
      </div>

      <div id="skillCont">
        {this.defaultSkills()}
        <AddSkills skillItems={this.state.skillItems}/>
      </div>

      <div id="expCont">
        {this.defaultExp()}
        <AddExp expItems={this.state.expItems}/>
      </div>

      <div id="edCont">
        {this.defaultEd()}
        <AddEd edItems={this.state.edItems}/>
      </div>

    </div>
  )
};
};

export default App;