const InitialValues={
    favourite:[],
}
export default function FavouriteReducer(state=InitialValues,action){
    switch(action.type){
        case"ADD":
        return{
            ...state,
            favourite:[...state.favourite]
        }
        case"REMOVE":
        return{
            ...state,
            favourite:[...state.favourite]
        }
        default:
            if(state===undefined)
            return[];
            return state;
    }
  

}