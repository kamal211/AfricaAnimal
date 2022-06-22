// import ADDITEM from './index';
const cart = [];

const handleCart =(state = cart, action) =>
{
const product = action.payload;
switch (action.type) {
   
    case "ADDQTY": 
    // Voir si le produit et deja existe

           const existProduct = state.find((x)=> x.id === product.id);
           if(existProduct){
               return state.map((x)=>
               x.id === product.id ? {...x, qty: x.qty + 1} : x
               );
           }else{
               return [
                   ...state, 
                   {
                       ...product,
                       qty: 1,
                   }
               ]
           }
   break;
   case 'SUBQTY':
    const existProduct1 = state.find((x)=> x.id === product.id);
     if(existProduct1.qty === 1){
         return state.filter ((x) => x.id !== existProduct1.id);

     }else{
         return state.map ((x) =>
         x.id === product.id ? {...x, qty: x.qty-1} : x);
     }
     break;
   
    case "ADDITEM": 
        const exist = state.find((x)=> x.id === product.id);
        if(exist){
            return state.map((x)=>
            x.id === product.id ? {...x, qty: x.qty = 1} : x
            );
        }else{
            return [
                ...state, 
                {
                    ...product,
                    qty: 1,
                }
            ]
        }
break;

    case 'DELITEM':
       const exist1 = state.find((x)=> x.id === product.id);
        if(exist1.qty === 0){
            state.map ((x) =>
            x.id === product.id ? {...x, qty: x.qty -1 } : x);
           

        }else{
            return state.filter ((x) => x.id !== exist1.id);
        }
        break;

    default: return state;
         break;
}
}
export default handleCart;