export default function (state=null, action) {
  switch (action.type) {
    case 'ADD_RECIPE':
      console.log(action.payload)
      return state
    case 'UPDATE_RECIPE':
      console.log(action.payload)
      return state
    case 'REMOVE_RECIPE':
      console.log(action.payload)
      return state
    default:
      return state
  }
}
