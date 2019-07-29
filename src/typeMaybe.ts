export default function whatIsMyType(params:string | number): string | number{
  let myType:string = ''
  switch(typeof(params)){
    case 'string':
      myType = 'is string'
      break;
    case 'number':
        myType = 'is number'
      break;
    default:
      myType = 'i don\'t konw' 
      break;
  }
  return myType
}