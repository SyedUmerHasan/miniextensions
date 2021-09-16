import { Classes, ClassesActionTypes } from '../interfaces/Classes';
import { Post, GET_POSTS, PostActionTypes } from '../interfaces/Post';
import { StudentActionTypes, Students } from '../interfaces/Students';

export const getPostsAction = (posts: Post[]): PostActionTypes => {
    return {
        type: GET_POSTS,
        payload: posts
    };
};


export const getStudentAction = (students: Students[]): StudentActionTypes => {
    return {
        type: 'GET_STUDENTS',
        payload: students
    };
};


export const getClassesAction = (classes: Classes[]): ClassesActionTypes => {
    return {
        type: 'GET_CLASSES',
        payload: classes
    };
};