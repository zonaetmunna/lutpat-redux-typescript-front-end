import { IProduct } from "../../types";
import { ActionType } from "../actionTypes";
import { CartAction } from "../types/cartActionTypes";


export const addToCart = (payload: IProduct): CartAction => {
    return {
        type: ActionType.ADD_TO_CART,
        payload,
    };
};

export const removeFromCart = (payload: string): CartAction => {
    return {
        type: ActionType.REMOVE_FROM_CART,
        payload,
    };
};

export const clearCart = (): CartAction => {
    return {
        type: ActionType.CLEAR_CART,
    };
};
