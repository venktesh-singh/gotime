import axios from 'axios';
import * as CONSTANT from '../../config';
export const GET_USER_LIST = 'GET_USER_LIST';
export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';

export const getUserList = () => (dispatch) => {
    axios.get(CONSTANT.BASE_URL + '/').then((res) => {
        dispatch({
            type: GET_USER_LIST,
            payload: res.data.user,
        });
    });
};

export const updateUser = (userData) => (dispatch) => {
    console.log("Redux User", userData)
    axios.post(CONSTANT.BASE_URL + `/user`, userData).then((res) => {   
        dispatch({
            type: UPDATE_USER,
            payload: res.data,
        });
    });
};    

export const deleteUser = async (_id)=> {
    await axios.delete(CONSTANT.BASE_URL +`/delete/${_id }`)
};

export const addUser = async (user) => {
    await axios.post(CONSTANT.BASE_URL + `/`, user)
 }