import { IProduct } from "../../types";
import { ActionType } from "../actionTypes";
import { CartAction } from "../types/cartActionTypes";

const cartReducer = (
    state: IProduct[] = [],
    action: CartAction
): IProduct[] => {
    switch (action.type) {
        case ActionType.ADD_TO_CART:
            return [...state, action.payload];
        case ActionType.REMOVE_FROM_CART: {
            const newState = state.filter((item) => item._id !== action.payload);
            return newState;
        }
        case ActionType.CLEAR_CART:
            return [];
        default:
            return state;
    }
};

export default cartReducer;
