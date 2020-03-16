import { DATA } from "../../data";
import { LOAD_POSTS, REMOVE_POST, TOGGLE_BOOK } from "../types";

export const loadPosts = () => ( { type: LOAD_POSTS, payload: DATA } );
export const toggleBooked = id => ( { type: TOGGLE_BOOK, payload: id } );
export const removePost = id => ( { type: REMOVE_POST, payload: id } );
