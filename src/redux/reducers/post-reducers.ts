import { GET_POSTS, PostActionTypes, GetPostsStateType } from '../interfaces/Post';

export const initialStateGetPosts: GetPostsStateType = {
    posts: []
};

export const getPostsReducer = (
    state = initialStateGetPosts,
    action: PostActionTypes
): GetPostsStateType => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            };
        default:
            return state;
    }
};