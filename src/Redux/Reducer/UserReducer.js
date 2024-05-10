import * as types from "../Types.js"

export const getAllPostsReducer = (state = {}, action) => {
	switch (action.type) {
		case types.GET_ALL_POSTS_REQUEST:
			return { loading: true }
		case types.GET_ALL_POSTS_SUCCESS:
			return { loading: false, posts: action.payload }
		case types.GET_ALL_POSTS_FAIL:
			return { loading: false, error: action.payload }
        case types.GET_ALL_POSTS_RESET:
            return {}
		default:
			return state
	}
}