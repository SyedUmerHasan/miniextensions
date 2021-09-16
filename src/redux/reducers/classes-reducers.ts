import { ClassesActionTypes, GetClassStateType } from '../interfaces/Classes';

export const initialStateGetClasses: GetClassStateType = {
    classes: []
};

export const getClassesReducer = (
    state = initialStateGetClasses,
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