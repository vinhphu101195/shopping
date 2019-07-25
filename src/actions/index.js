import * as Types from './../constants/ActionType';
import callApi from './../utils/apiCaller';

//request data from local api
export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('products', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data))
        })
    }
}

export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}

// delete function
export const actDeleteRequest = (id) => {
    return dispatch => {
        return callApi(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(actDelete(id));
        })
    }
}

export const actDelete = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}

// add item
export const actAddProductRequest = (product) =>{
    return dispatch =>{
        return callApi('products','POST',product).then(res =>{
            dispatch(actAddProduct(res.data));
        })
    }
}

export const actAddProduct = (product) =>{
    return{
        type: Types.ADD_PRODUCT,
        product
    }
}

//Edit item
export const actGetProductRequest = (id) =>{
    return dispatch =>{
        return callApi(`products/${id}`,'GET',null).then(res=>{
            dispatch(actGetProduct(res.data));
        });
    }
}

export const actGetProduct = (product) =>{
    return {
        type: Types.EDIT_PRODUCT,
        product
    }
}

// update product

export const actUpdateProductRequest = (product) =>{
    return dispatch =>{
        return callApi(`products/${product.id}`,'PUT',product).then(res =>{
            dispatch(actUpdateProduct(res.data));
        })
    }
}

export const actUpdateProduct = (product) =>{
    return {
        type: Types.UPDATE_PRODUCT,
        product
    }
}