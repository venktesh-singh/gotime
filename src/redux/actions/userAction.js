import axios from 'axios';
import * as CONSTANT from '../../config';

export const GET_USER_LIST = 'GET_USER_LIST';
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
  axios.post(CONSTANT.BASE_URL + `/user`, userData).then((res) => {
    dispatch({
      type: UPDATE_USER,
      payload: res.data,
    });
  });
};  

export const deleteUser = (_id) => async (dispatch) => {
  await axios.delete(CONSTANT.BASE_URL + `/user/delete/${_id}`);
  
  dispatch({
    type: DELETE_USER,
    payload: _id,
  });
};
