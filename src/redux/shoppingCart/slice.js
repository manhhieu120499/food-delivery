import { createSlice } from "@reduxjs/toolkit";

export const ShoppingCartSlice = createSlice({
    name: 'ShoppingCartSlice',
    initialState: {
        carts: [],
        total: 0,
    },
    reducers: {
        addFood: (state, action) => {
            let updateCart = [...state.carts]
            const existFood = updateCart.findIndex(item => item.id == action.payload.food.id)
            if(existFood == -1) {
                updateCart = [...updateCart, action.payload.food]
            }else {
                updateCart[existFood] = {
                    ...updateCart[existFood],
                    quantity: updateCart[existFood].quantity + 1
                }
            }
            localStorage.setItem('carts', JSON.stringify(updateCart))
            state = {
                carts: [...updateCart],
                total: updateCart.length
            }
            return state
        },
        removeFood: (state, action) => {
            let updateCart = [...state.carts]
            updateCart = updateCart.filter(food => food.id !== action.payload.foodId)
            localStorage.setItem('carts', JSON.stringify(updateCart))
            state = {
                carts: [...updateCart],
                total: updateCart.length
            }
            return state
        },
        initShoppingCart: (state, action) => {
            state = {
                carts: [...action.payload.carts],
                total: action.payload.carts.length
            }
            return state
        },
        decreaseFood: (state, action) => {
            let updateCart = [...state.carts]
            const indexFood = updateCart.findIndex(item => item.id == action.payload.id)
            if(Number.parseInt(updateCart[indexFood].quantity) - 1 === 0) {
                updateCart = updateCart.filter(item => item.id !== action.payload.id)
            }else {
                updateCart[indexFood] = {
                    ...updateCart[indexFood],
                    quantity: updateCart[indexFood].quantity - 1
                }
            }
             
            state = {
                carts: [...updateCart],
                total: updateCart.length
            }
            return state
        }
    }
})

export const {addFood, removeFood, initShoppingCart, decreaseFood} = ShoppingCartSlice.actions

export default ShoppingCartSlice.reducer