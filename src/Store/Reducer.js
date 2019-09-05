

const initialState = {
	age:21,

}


const Reducer = (state=initialState,action)=>{
 const newState = {...state}
 switch(action.type){
 	case "AGE_UP_ASYNC":
    return {
    	...newState,
    	age:newState.age + action.value,
    	
    }
  

  	case "AGE_DOWN":
  	return {
    	...newState,
    	age:newState.age - action.value,
    	
    }
    
    default:
    return newState;
  }


}


export default Reducer;