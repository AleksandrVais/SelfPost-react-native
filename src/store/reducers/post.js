import { ADD_POST, LOAD_POSTS, REMOVE_POST, TOGGLE_BOOK } from "../types";

const initialState = {
	allPosts: [],
	bookedPosts: [],
	loading: true
};

export const postReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch ( type ) {
		case LOAD_POSTS: {
			return { ...state, allPosts: payload, bookedPosts: payload.filter( post => post.booked ), loading: false };
		}
		case TOGGLE_BOOK: {
			const allPosts = state.allPosts.map( post => {
				if ( post.id === payload ) {
					post.booked = !post.booked;
				}
				return post;
			} );
			return { ...state, allPosts, bookedPosts: allPosts.filter( post => post.booked ) };
		}
		case REMOVE_POST: {
			return {
				...state,
				allPosts: state.allPosts.filter( post => post.id !== payload ),
				bookedPosts: state.bookedPosts.filter( post => post.id !== payload )
			};
		}
		case ADD_POST: {
			return {
				...state,
				allPosts: [{ ...payload }, ...state.allPosts]
			};
		}

		default: {return state;}
	}
	return state;

};
