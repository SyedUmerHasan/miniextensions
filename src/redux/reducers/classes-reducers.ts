import { ClassesActionTypes, GetClassStateType } from '../interfaces/Classes';

export const initialStateGetPosts: GetClassStateType = {
    classes: []
};

export const getClassesReducer = (
    state = initialStateGetPosts,
    action: ClassesActionTypes
): GetClassStateType => {
    switch (action.type) {
        case 'GET_CLASSES':
            return {
                ...state,
                classes: action.payload
            };
        default:
            return state;
    }
};