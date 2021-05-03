import request from '../../api'
import {
   COMMENT_LIST_FAIL,
   COMMENT_LIST_REQUEST,
   COMMENT_LIST_SUCCESS,
   CREATE_COMMENT_FAIL,
   CREATE_COMMENT_SUCCESS,
} from '../actionType'

export const getCommentsOfVideosById = id => async dispatch => {
    try{
        
    }catch(error){ 
        console.log(error.response.data)
        dispatch({
        
        })

    }
}