import React ,{Component }from 'react';
import './App.css';
import { connect } from 'react-redux';


const mapStateToProps = (state)=>{
  return{
    age:state.age,
    array:state.array
   
  };
}

const mapDispatchToProps =(dispatch) =>{
  return{
    onAgeUp:()=>dispatch({type:"AGE_UP",value:1}),
    onAgeDown:()=>dispatch({type:"AGE_DOWN",value:1}),
    

  };
}

class App extends Component {
  render(){
  return (
    <div className="App">
      <header className="App-header">
       Saga-Middleware
      </header>
       <div className='age'>Your Age:<span>{this.props.age}</span></div>
       <button className='ageUp' onClick={this.props.onAgeUp}>Age Up</button>
        <button className='ageDown' onClick={this.props.onAgeDown}>Age Down</button>
        <hr />
    </div>
  );
}
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
