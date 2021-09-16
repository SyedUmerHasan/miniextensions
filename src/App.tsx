import React, { useEffect, useState } from 'react';
import './App.css';
import MainCard from "./components/main-card"
import { useLocalStorage } from './hooks/useLocalStorage';
import { useDispatch, useSelector } from 'react-redux';
import { getStudents } from './redux/effects';
import { AppState } from './redux/store';

const App = () => {
  const [isUserLoggedIn, updateUserLogin] = useLocalStorage<any>('user', {})
  const [currentUser, SetCurrentUser] = useState<string>("")
  const [studentList] = useState<Map<string, any>>(new Map())
  let studentListwithID: any = {}

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStudents());
  }, [dispatch]);
  
  /** Loads Student data from store */
  const students = useSelector((state: AppState) => state.students.students);

  students.map((eachRecord: any) => {
    /** toLowerCase is used to eliminate username key cases */
    studentListwithID[eachRecord.id] = {
      id: eachRecord.id,
      ...eachRecord.fields
    }

    return studentList.set(eachRecord?.fields?.Name?.toLowerCase(), {
      id: eachRecord.id,
      ...eachRecord.fields
    })
  })

  const logoutApp = () => {
    updateUserLogin("")
  }

  const loginApp = () => {
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

  return (
    <div id="main-app">
      {!isUserLoggedIn && isUserLoggedIn !== undefined ? <>
        <input id="student-name" onChange={(e) => { SetCurrentUser(e.target.value) }} value={currentUser} />
        <button id="login" onClick={loginApp}>Login</button>
      </> :
        <>
          <button id="logout" onClick={logoutApp}>Logout</button>
          {
            isUserLoggedIn?.Classes?.map((classId: any) => {
              return (<MainCard classId={classId}></MainCard>)
            })
          }
        </>
      }
    </div>
  );
}

export default App;
