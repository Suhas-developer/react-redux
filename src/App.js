import React from "react";
import "./style.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Counter  from './Counter'

export default function App() {

  const initialsState = {
    count : 0 
  };

  const  Reducer = (state= initialsState , action) =>{
   console.log(state)
   // return state;
    switch(action.type){
      case 'INCREMENT': return {
        count : state.count + 1
      }
                        
      case 'DECREMENT': return {
        count :  state.count - 1
      }
                        
      default: return state
    }
  }

  const store = createStore(Reducer,+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 )
 
  return (
    <Provider store={store}>
    <Counter  />
    </Provider>
  );
}
