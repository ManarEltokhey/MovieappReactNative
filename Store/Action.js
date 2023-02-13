export const addFavourite=(payload)=>{
    return{
        type:"ADD",
        payload
    }
}
export const deleteFavourite=(payload)=>{
    return{
        type:"REMOVE",
        payload
    }
}
 