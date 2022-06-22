import { type } from "@testing-library/user-event/dist/type"
// For Add Item to Cart
export const addQty = (product) => {
    return {
        type : 'ADDQTY',
        payload : product
    }
};
export const subQty = (product) => {
    return {
        type : 'SUBQTY',
        payload : product
    }
};
export const addItem = (product) =>{
    return {
        type : 'ADDITEM',
        payload : product
    }
};


// For Delete Item From Cart
export const delItem = (product) =>{
    return{
        type : 'DELITEM', 
        payload : product
    }
}