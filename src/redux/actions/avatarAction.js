import axios from 'axios';
import * as CONSTANT from '../../config';
export const GET_AVATAR_LIST = 'GET_AVATAR_LIST';
export const UPDATE_AVATAR = 'UPDATE_AVATAR';

export const getAvatarList = () => (dispatch) => {
    axios.get(CONSTANT.BASE_URL + '/avatar').then((res) => {  
        dispatch({
            type: GET_AVATAR_LIST,
            payload: res.data.user,
        });
    });
};

export const addupdateAvatar = (avaData) => (dispatch) => {
   
    const formData = new FormData();  
    //formData.append('name', avaData.name);
    if (avaData.image) {
      formData.append('image', avaData.image);
    }
    axios.post(CONSTANT.BASE_URL + `/avatar`, formData)
      .then((res) => {   
        dispatch({
          type: UPDATE_AVATAR,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.error('Error adding/updating Avatar:', error);
      });
  };
     

