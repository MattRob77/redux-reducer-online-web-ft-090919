export function managePresents(state = { numberOfPresets:0 }, action){
  switch (action.type) {
    case "Increase": 
      return {numberOfPresets: state.numberOfPresets + 1}; 
      default: 
      return state; 
  }
}
