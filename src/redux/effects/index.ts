import { getClassesAction, getPostsAction, getStudentAction } from '../actions';
import { Dispatch } from 'redux';
import { ClassesActionTypes } from '../interfaces/Classes';
import { getRecordById, listRecord, TablesAvailable } from '../../air-table/classes';
import { StudentActionTypes } from '../interfaces/Students';

var students: any = {}
var classes: any = {}


export const getClasses = () => {
    return (dispatch: Dispatch<ClassesActionTypes>) => {
          listRecord(TablesAvailable.Classes)
          .then((data: any)=>{
                classes = data.records
                dispatch(getClassesAction(data.records));
          })
      };
};

export const getStudents = () => {
    return (dispatch: Dispatch<StudentActionTypes>) => {
        listRecord(TablesAvailable.Students)
        .then((data: any)=>{
            students = data.records
            dispatch(getStudentAction(data.records));
        });
    };
};
    
export const getStudentsByID = (id: string) => {
    return (dispatch: Dispatch<StudentActionTypes>) => {
        let studentdata = students[id]
        if(!studentdata){
            getRecordById(TablesAvailable.Students, id)
            .then(({record}: any)=>{
                students[id] = record
                dispatch(getStudentAction(Object.values(students)));
            });
        }
        else {
            dispatch(getStudentAction(Object.values(students)));
        }
    };
};
    
export const getClassesByID = (id: string) => {
    return (dispatch: Dispatch<ClassesActionTypes>) => {
        let classData = classes[id]
        if(!classData){
            getRecordById(TablesAvailable.Classes, id)
            .then(({record}: any)=>{              
                classes[id] = record
                dispatch(getClassesAction(Object.values(classes)));
            });
        }
        else {
            dispatch(getClassesAction(Object.values(classes)));
        }
    };
};
