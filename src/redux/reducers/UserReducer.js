import { GET_USER_LIST, UPDATE_USER, DELETE_USER } from '../actions/userAction';

const initialState = {
  user: [],
};

const UserReducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_USER_LIST: {
      return {
        ...state,
        user: [...action.payload],
      };
    }
    case UPDATE_USER: {
      return {
        ...state,
        user: [...action.payload],
      };
    }
    case DELETE_USER: {
      return {
        ...state,
        user: state.user.filter((user) => user._id !== action.payload),
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default UserReducer;
