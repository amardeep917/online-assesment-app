import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from './MainPage';
import AdminLogin from './Admin/AdminLogin';
import AdminDashBoard from './Admin/AdminDashBoard';
import AdminContext from './contextApi/AdminContext';
import { useState } from 'react';
import AdminSignUp from './Admin/AdminSignUp';
import AdminDetailsUpdate from './Admin/AdminDetailsUpdate';
import Test from './Test';
import QuestionPage from './Admin/QuestionPage';
import UserLogin from './user/UserLogin';
import UserSignUp from './user/UserSignUp';
import UserDashBoard from './user/UserDashBoard';
import QuestionSubmitPage from './user/QuestionSubmitPage';
import ViewUserScorePage from './Admin/ViewUserScorePage';


function App() {
  const [globalUsername,setGlobalUsername]=useState()
  return (
    <>
      <BrowserRouter>
        <AdminContext.Provider value={{globalUsername:globalUsername,setGlobalUsername:setGlobalUsername}}>
          <Routes>
            <Route path='/' element={<MainPage></MainPage>}></Route>
            <Route path='/userLogin' element={<UserLogin></UserLogin>}></Route>
            <Route path='/adminLogin' element={<AdminLogin></AdminLogin>}></Route>
            <Route path='/adminDashBoard' element={<AdminDashBoard></AdminDashBoard>}></Route>
            <Route path='/userDashBoard' element={<UserDashBoard></UserDashBoard>}></Route>
            <Route path='/adminSignup' element={<AdminSignUp></AdminSignUp>}></Route>
            <Route path='/userSignup' element={<UserSignUp></UserSignUp>}></Route>
            <Route path='/adminDetailsUpdate/:id' element={<AdminDetailsUpdate></AdminDetailsUpdate>}></Route>
            <Route path='/viewUserScorePage' element={<ViewUserScorePage></ViewUserScorePage>}></Route>
            <Route path='/questionPage' element={<QuestionPage></QuestionPage>}></Route>
            <Route path='/submitpage' element={<QuestionSubmitPage></QuestionSubmitPage>}></Route>
          </Routes>
        </AdminContext.Provider>
      </BrowserRouter>
      {/* <Test></Test> */}
    </>
    
  );
}

export default App;
