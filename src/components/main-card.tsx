import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getRecordById, TablesAvailable } from '../air-table/classes';
import { AppState } from '../redux/store';
import "../styles/main-card.css"
import { getClassesByID } from '../redux/effects/index';
import { Students } from '../redux/interfaces/Students';

type MainCardType = {
    classId: string;
    classData?: string;
    studentList?: Map<string, any>;
}

const MainCard = (props: MainCardType) => {
    const { classId, classData, studentList } = props;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getClassesByID(classId));
    }, []);

    /** Loads Student data from store */
    const { classes: obj1, students: obj2 } = useSelector((state: AppState) => state);
    const { classes } = obj1
    const { students } = obj2

    const currentClass = classes.find((eachClass)=>{
        return eachClass.id == classId
    })
    const currentStudents = currentClass?.fields.Students

    return (
        <div>
            <div className="main-card">
                <div className="main-card--name">Name</div>
                <div className="main-card--class">{currentClass?.fields.Name}</div>
                <div className="main-card--student">Students</div>
                <div>{
                    currentStudents?.map((eachStudent: string, key: any) => {
                        let currentStudent = students?.find((stu)=> stu.id == eachStudent)
                        return currentStudent ? <div key={key} className="main-card--student-name">{currentStudent.fields.Name}</div> : ""
                    })
                }</div>
            </div>
        </div>
    )
}
export default React.memo(MainCard)