import * as types from "../Types"
import { config } from "../Config"
import axios from "axios"
import toast from "react-hot-toast"
import { authHeader, header } from "../Header"

const url = config.liveUrl

export const get_posts = () => async (dispatch, getState) => {
	try {
		dispatch({ type: types.GET_ALL_POSTS_REQUEST })
		// const {
		// 	getAllPosts: { adminDetail },
		// } = getState()
		const { data } = await axios.get(
			`${url}/allusers`
			// tea,
			// {headers: {
			// 	'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
			// 	'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
			// }}
		)
		console.log(data)
		
		// if (data.status === 'ok') {
			dispatch({ type: types.GET_ALL_POSTS_SUCCESS, payload: data.data })
			toast.success('Success!', {
				position: 'top-right',
			})
		// }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(admin_logout())
		}
		dispatch({ type: types.GET_ALL_POSTS_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}