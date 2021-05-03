import request from "../../api";
import {
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
  HOME_VIDEOS_FAIL,
} from "../actionType";

export const getPopularVideos = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: HOME_VIDEOS_REQUEST,
    });
    const { data } = await request("/videos", {
      params: {
        part: "snippet, contextDetails, statistics",
        chart: "mostPopular",
        regionCode: "IN",
        maxResults: 20,
        pageToken: getState().homeVideos.nextPageToken,
      },
    });
    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: "ALL",
      },
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: HOME_VIDEOS_FAIL,
      payload: error.message,
    });
  }
};
export const getVideosByCategory = keyword => async (dispatch, getState) => {
    try {
      dispatch({
        type: HOME_VIDEOS_REQUEST,
      });
      const { data } = await request("/videos", {
        params: {
          part: "snippet, contextDetails, statistics",
          chart: "mostPopular",
          regionCode: "IN",
          maxResults: 20,
          pageToken: getState().homeVideos.nextPageToken,
        },
      });
      dispatch({
        type: HOME_VIDEOS_SUCCESS,
        payload: {
          videos: data.items,
          nextPageToken: data.nextPageToken,
          category: "ALL",
        },
      });
    } catch (error) {
      console.log(error.message);
      dispatch({
        type: HOME_VIDEOS_FAIL,
        payload: error.message,
      });
    }
  };
  export const getVideoById = id => async dispatch => {
    try {
       dispatch({
          type: SELECTED_VIDEO_REQUEST,
       })
 
       const { data } = await request('/videos', {
          params: {
             part: 'snippet,statistics',
             id: id,
          },
       })
       dispatch({
          type: SELECTED_VIDEO_SUCCESS,
          payload: data.items[0],
       })
    } catch (error) {
       console.log(error.message)
       dispatch({
          type: SELECTED_VIDEO_FAIL,
          payload: error.message,
       })
    }
 }