
import { 
    GET_CAT_LIST,
    UPDATE_CAT
    } from '../actions/categoryAction'; 

const initialState = {
    cat: [],
};

const CategoryReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_CAT_LIST: {
            return {
                ...state,
                cat: [...action.payload],
            };
        }
        case UPDATE_CAT: {
            return {
                ...state,
                cat: [...action.payload],
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};

export default CategoryReducer;
