import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import quotestxt from './quotestext.js';

console.log(quotestxt[1]);


let randstart = Math.floor(Math.random() * quotestxt.length );
let colorpalet = '123456789ABC'




class Quotebox extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      quote:quotestxt[randstart].text,
      author:quotestxt[randstart].author,
      color:'#454'
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick=()=>{

    let newColor = "#";
    for(let i = 0; i < 6;i++){
      newColor = newColor + colorpalet[Math.floor(Math.random() * colorpalet.length )]
    }




    let rand = Math.floor(Math.random() * quotestxt.length );
    if(quotestxt[rand].author){
    this.setState({
      quote: quotestxt[rand].text,
      author: quotestxt[rand].author,
      color:newColor
    })}
    else{
       this.setState({
      quote: quotestxt[rand].text,
      author: 'unknown',
      color:newColor
    })
    }

  }
  
  
  
  
  render(){

    let outStyle={
      backgroundColor:this.state.color
    }
    let inStyle = {
      color:this.state.color,
       backgroundColor:'white'

    }



    return (
      <div id='page' style={outStyle}>
        <div id='quote-box' style={inStyle}>
           <h2 id="text" style={inStyle}>{this.state.quote}</h2>
           <p id="author" style={inStyle}>{this.state.author}</p>
                   <div id="buttons"><button type="button" onClick={this.handleClick} className="button" style={outStyle}>next quote</button>
          <button type='button' style={outStyle}><a>tweet</a></button>
          </div>
       </div>
      </div>
    );
  }
}


ReactDOM.render(
  
    <Quotebox />
  ,
  document.getElementById('root')
);


