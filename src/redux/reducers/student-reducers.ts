import { StudentActionTypes, GetStudentsStateType } from '../interfaces/Students';

export const initialStateGetStudents: GetStudentsStateType = {
    students: []
};

export const getStudentsReducer = (
    state = initialStateGetStudents,
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