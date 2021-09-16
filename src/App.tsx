import React, { useEffect, useState } from 'react';
import './App.css';
import MainCard from "./components/main-card"
import { useLocalStorage } from './hooks/useLocalStorage';
import { listRecord, TablesAvailable } from './air-table/classes';
import { useDispatch, useSelector } from 'react-redux';
import { getStudents } from './redux/effects';
import { AppState } from './redux/store';

// key1Zmz5ZWcuCl2gR

const App = () => {
  const [isUserLoggedIn, updateUserLogin] = useLocalStorage<any>('user', {})
  const [currentUser, SetCurrentUser] = useState<string>("")
  const [studentList] = useState<Map<string, any>>(new Map())

  const dispatch = useDispatch();
  // useEffect(() => {
  // }, [dispatch]);
  
  /** Loads Student data from store */
  const students = useSelector((state: AppState) => state.students);
  students.students.map((eachRecord: any) => {
    /** toLowerCase is used to eliminate username key cases */
    return studentList.set(eachRecord?.fields?.Name?.toLowerCase(), {
      id: eachRecord.id,
      ...eachRecord.fields
    })
  })

  const logoutApp = () => {
    updateUserLogin("")
  }

  const loginApp = () => {

    dispatch(getStudents());
    if (currentUser) {
      const getUserDetails = studentList.get(currentUser?.toLowerCase())
      if (getUserDetails) {
        updateUserLogin(getUserDetails)
      }
      else {
        alert("No user found in airtable with this name");
      }
    }
    else {
      alert("Please enter user name to login" + currentUser)
    }
  }


  // useEffect(() => {

  //   /** Load one time records of students to validate if user exist or not */
  //   listRecord(TablesAvailable.Students)
  //     .then(({ records }: any) => {
  //       /** 
  //        * Adding all student records in local map with O(1) time retrieval 
  //        * Not using Sets because I am using Key Value pair data Structure in Javascript
  //        * Sets are only used to find a single value.
  //        */
  //       records.map((eachRecord: any) => {
  //         /** toLowerCase is used to eliminate username key cases */
  //         return studentList.set(eachRecord?.fields?.Name?.toLowerCase(), {
  //           id: eachRecord.id,
  //           ...eachRecord.fields
  //         })
  //       })

  //     });

  // }, [])

  return (
    <div id="main-app">
      {!isUserLoggedIn && isUserLoggedIn !== undefined ? <>
        <input id="student-name" onChange={(e) => { SetCurrentUser(e.target.value) }} value={currentUser} />
        <button id="login" onClick={loginApp}>Login</button>
      </> :
        <>
          <button id="logout" onClick={logoutApp}>Logout</button>
          {
            isUserLoggedIn?.Classes?.map((studentClass: any) => {
              return (<MainCard studentClass={studentClass} classData={isUserLoggedIn} studentList={studentList}></MainCard>)
            })
          }
        </>
      }
    </div>
  );
}

export default App;
