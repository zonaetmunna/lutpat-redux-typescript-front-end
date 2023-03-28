import { Dispatch } from 'react';
import AuthService from '../../services/auth.service';
import { ActionType } from '../actionTypes';
import { AuthAction } from '../types/authActionTypes';


export const login = (payload: { email: string; password: string }) => {
    return (dispatch: Dispatch<AuthAction>) => {
        dispatch({
            type: ActionType.LOGIN_PENDING,
        });
        AuthService.login(payload)
            .then((data) => {
                dispatch({
                    type: ActionType.LOGIN_SUCCESS,
                    payload: data,
                });
            })
            .catch((err) => {
                dispatch({
                    type: ActionType.LOGIN_ERROR,
                    payload: err?.response?.data?.message,
                });
            });
    };
    // return ;
};

export const logout = (): AuthAction => {
    return {
        type: ActionType.LOGOUT,
    };
};