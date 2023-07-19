import axios from 'axios';
import * as CONSTANT from '../../config';
export const GET_SLOT_LIST = 'GET_SLOT_LIST';
export const ADD_SLOT = 'ADD_SLOT';
export const UPDATE_SLOT = 'UPDATE_SLOT';

export const addupdateSlot = (slotData) => (dispatch) => {
    axios.post(CONSTANT.BASE_URL + `/slot/create_slot`, slotData).then((res) => {   
        dispatch({
            type: UPDATE_SLOT,
            payload: res.data,
        });
    });
};    

export const deleteSlot = async (_id)=> {
    await axios.delete(CONSTANT.BASE_URL +`/delete/${_id }`)
};
