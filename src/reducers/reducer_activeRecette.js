export default function (state=null, action){
  switch (action.type) {
    case 'ACTIVE_RECETTE':
      console.log(action.payload)
      return action.payload
    default:
      return state
  }
}
