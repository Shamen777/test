import API from '../API';

export function getCategories(){
    return async (dispatch)=>{
    await API.category()
    .then(res => {
        dispatch({ type: "GET_CATEGORIES", payload: res })
    })}
}

export function getCategoriesById(id){
    return async (dispatch)=>{
    await API.categoryId(id)
    .then(res => {
        dispatch({ type: "GET_CATEGORIES_BY_ID", payload: res })
    })}
}