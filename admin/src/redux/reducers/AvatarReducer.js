
import { 
    GET_AVATAR_LIST,
    UPDATE_AVATAR
    } from '../actions/avatarAction'; 

const initialState = {
    ava: [],
};

const AvatarReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_AVATAR_LIST: {
            return {
                ...state,
                ava: [...action.payload],
            };
        }
        case UPDATE_AVATAR: {
            return {
                ...state,
                ava: [...action.payload],
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};
  
export default AvatarReducer;
