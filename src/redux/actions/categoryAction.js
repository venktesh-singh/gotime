import axios from 'axios';
import * as CONSTANT from '../../config';
export const GET_CAT_LIST = 'GET_CAT_LIST';
export const UPDATE_CAT = 'UPDATE_CAT';

export const getCategoryList = () => (dispatch) => {
    axios.get(CONSTANT.BASE_URL + '/category').then((res) => {  
        dispatch({
            type: GET_CAT_LIST,
            payload: res.data.user,
        });
    });
};

export const addupdateCategory = (catData) => (dispatch) => {
    console.log("Redux Category", catData);
    const formData = new FormData();  
    formData.append('name', catData.name);
    if (catData.image) {
      formData.append('image', catData.image);
    }
    axios.post(CONSTANT.BASE_URL + `/category`, formData)
      .then((res) => {   
        dispatch({
          type: UPDATE_CAT,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.error('Error adding/updating category:', error);
      });
  };
     

