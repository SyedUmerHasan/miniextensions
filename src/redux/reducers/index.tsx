
import { combineReducers } from 'redux';
import { getPostsReducer } from './post-reducers';
import { getStudentsReducer } from './student-reducers';
import { getClassesReducer } from './classes-reducers';

const rootReducer = combineReducers({
    classes: getClassesReducer,
    students: getStudentsReducer
});

export default rootReducer;