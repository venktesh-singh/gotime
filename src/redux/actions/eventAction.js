import axios from 'axios';
import * as CONSTANT from '../../config';
export const GET_EVENT_LIST = 'GET_EVENT_LIST';
export const ADD_EVENT = 'ADD_EVENT';
export const UPDATE_EVENT = 'UPDATE_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';

export const getEventList = () => (dispatch) => {
    axios.get(CONSTANT.BASE_URL + '/').then((res) => {
        dispatch({
            type: GET_EVENT_LIST,
            payload: res.data.event,
        });
    });
};

export const updateEvent = (eventData) => (dispatch) => {
   
    axios
      .post(CONSTANT.BASE_URL + "/event/", eventData)
      .then((res) => {
        dispatch({
          type: UPDATE_EVENT,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.error("Error updating event:", error);
        // Handle the error here (e.g., dispatch an error action, show an error message)
    });
};
     

export const deleteEvent = async (_id)=> {
    await axios.delete(CONSTANT.BASE_URL +`/delete/${_id }`)
};

export const addEvent = async (event) => {
    await axios.post(CONSTANT.BASE_URL + `/`, event)
 }