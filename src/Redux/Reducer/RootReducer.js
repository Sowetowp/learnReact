import { combineReducers } from "redux";
import { getAllPostsReducer } from "./UserReducer";

const rootReducer = combineReducers({
    getAllPosts: getAllPostsReducer
})
export {rootReducer}