import { getClassesAction, getPostsAction, getStudentAction } from '../actions';
import { Dispatch } from 'redux';
import { ClassesActionTypes } from '../interfaces/Classes';
import { listRecord, TablesAvailable } from '../../air-table/classes';
import { StudentActionTypes } from '../interfaces/Students';

export const getClasses = () => {
    return (dispatch: Dispatch<ClassesActionTypes>) => {
          listRecord(TablesAvailable.Classes)
          .then((data: any)=>{
              dispatch(getClassesAction(data.records));
          })
      };
};

export const getStudents = () => {
    return (dispatch: Dispatch<StudentActionTypes>) => {
        listRecord(TablesAvailable.Students)
        .then((data: any)=>{
            dispatch(getStudentAction(data.records));
        });
    };
};
    