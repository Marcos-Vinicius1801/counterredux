export const myLogger = store => next => action => {
    console.log("Middleware reached");
    return next(action)    
}

export const mySecondLogger = store => next => action => {
  if(store.getState() === 0){
    return next({type:'INCREMENT'})
  }
  return next(action)
}

export const myThirdLogger = store => next => action => {

  if(store.getState() >= 10){
    return next({type: 'DECREMENT'})
  }
   
  return next(action)   
}