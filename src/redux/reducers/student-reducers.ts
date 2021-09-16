import { StudentActionTypes, GetStudentsStateType } from '../interfaces/Students';

export const initialStateGetPosts: GetStudentsStateType = {
    students: []
};

export const getStudentsReducer = (
    state = initialStateGetPosts,
    action: StudentActionTypes
): GetStudentsStateType => {
    switch (action.type) {
        case 'GET_STUDENTS':
            return {
                ...state,
                students: action.payload
            };
        default:
            return state;
    }
};