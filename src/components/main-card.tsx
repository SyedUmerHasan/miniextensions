import React, { useState } from 'react'
import { getRecordById, TablesAvailable } from '../air-table/classes';
import "../styles/main-card.css"

type MainCardType = {
    studentClass: string;
    classData: string;
    studentList: any
}

const MainCard = (props: MainCardType) => {
    const { studentClass, classData, studentList } = props;
    const [classdata, setClassData] = useState<any>({})

    React.useEffect(() => {
        let temp: any = []
        getRecordById(TablesAvailable.Classes, studentClass)
            .then(({ record }: any) => {
                temp = {
                    id: record.id,
                    ...record.fields,
                }
            }).finally(() => {
                setClassData(temp)
            })
    }, [])

    return (
        <div className="main-card">
            <div className="main-card--name">Name</div>
            <div className="main-card--class">{classdata.Name}</div>
            <div className="main-card--class">{JSON.stringify(classdata)}</div>
            <div className="main-card--student">Students</div>
            <div className="main-card--student-name">{
                classdata?.Students?.map((eachClass: string) => {
                    // console.log(studentList)
                })
            }</div>
        </div>
    )
}
export default React.memo(MainCard)