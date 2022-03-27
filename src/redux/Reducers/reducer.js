
const initialState = {
    basket:[
        
    ],
    user:''
}

export const basketReducer =(state = initialState,action)=>{
    console.log(action)
     switch (action.type) {
         case 'ADD_TO_BASKET':
             return {
                 ...state,
                 basket:[...state.basket,action.payload]
             }
        case 'SETUSER':
            return {
                ...state,
                user:action.User
            }
            case 'REMOVEFROMBASKET':
                const index = state.basket.findIndex((basketItem)=>  
                       basketItem.id === action.payload
                );
                let newBasket = [...state.basket];
                console.log(index <= 0)
                if(index){
                     newBasket.splice(index,1)
                }else{
                    console.warn(`Can't remove product (id:${action.payload}) as its not in basket!`)
                }
                return {
                    ...state,
                    basket:newBasket
                }
         default:
             return state
     }
}