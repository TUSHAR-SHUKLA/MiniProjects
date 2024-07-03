import {createSlice} from '@reduxjs/toolkit'

const cartSlice =createSlice({
    name:"cart",
    initialState:{
        cartList:[],
        total:0
    },
    reducers:{
        add(state, action){
            const updatedcartlist = state.cartList.concat(action.payload);
            const total = state.total+ action.payload.price;
            return {...state, cartList:updatedcartlist, total}
        },
        remove(state, action){
            const updatedcartlist = state.cartList.filter(item => item.id!== action.payload.id )
            const total = state.total - action.payload.price;

            return {...state, cartList:updatedcartlist, total}
        }
    }
});
export const {add, remove} = cartSlice.actions;
export const cartReducer = cartSlice.reducer




// import {createSlice} from '@reduxjs/toolkit'

// const cartslice = createSlice({
//     name: "cart",
//     initialState:{
//         cartList:[],
//         total:0
//     },
//     reducers:{
//         add(state, action){
//             // const updatedCartList = state.cartList.concat(action.payload);
//             // return {...state, cartList:updatedCartList}
//         },
//         remove(){
           
//         }
//     }
// });

// export const {add, remove} = cartslice.actions;
// export const cartReducer = cartslice.reducer;