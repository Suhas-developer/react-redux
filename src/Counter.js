import React from "react";
import { connect } from "react-redux";
import './counterstyle.css';

const Counter = (props) => {
  //console.log(props);
  const inc = () =>{
    console.log(props);
    props.dispatch({ type:'INCREMENT' } );
 }
  const dec = () =>{
    //if()
    props.dispatch({ type:'DECREMENT' } );
 }


  return (
    <div class="div">
    <h2>COUNTER</h2>
      <button value="+" onClick={inc}>INCREMENT</button>
      <span >{props.count}</span>
      <button value="-"  onClick={(props.count > 0) ? dec : "" }>DECREMENT</button>
    </div>
  );
};

const mapStatetoProp = (state) => {
  console.log(state,"mapStatetoProp")
 return ( { 
   count: state.count
 }
 )
}

export default connect(mapStatetoProp)(Counter);
