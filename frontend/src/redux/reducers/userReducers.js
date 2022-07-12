import {
  USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT
} from '../actions/types'

const userDetailsFromStorage = localStorage.getItem('userDetails')
	? JSON.parse(localStorage.getItem('userDetails'))
	: null;


const initialState = {
	loading: null,
	error: null,
	userData: userDetailsFromStorage,
	
};


export const userLoginReducer = ( state = initialState, action ) => { 
  const { payload, type } = action;
  
  switch ( type ) {
    case USER_LOGIN_REQUEST:
			return {
				...state,
				loading: true,
				userData: {},
      };
    
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: payload
      };
    
    case USER_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: payload
      }
    
    case USER_LOGOUT:
      return {}
    
    default:
      return state;
  }


}