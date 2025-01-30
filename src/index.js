// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Dashboard from './components/dashboard';
import UpdateForm from './C_updationForm/updateForm';
import Layout from './components/layout';
import PlUpdateForm from './C_updationForm/pl';
import FacultyLayout from './facultylogin/facultyLayout';
import FacultyHome from './facultylogin/facultyHome';
import Approval from './facultylogin/approval';
import AdminHome from './adminLogin/adminhome';
import StudentDetails from './adminLogin/StudentDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="485102142455-39tj97nm4nabk365m0mr29rp20eoh2t6.apps.googleusercontent.com">
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/layout" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="updateform/programming" element={<PlUpdateForm />} />
            <Route path="updateform/group-discussion" element={<UpdateForm title="Group Discussion" />} />
            <Route path="updateform/communication" element={<UpdateForm title="Communication" />} />
            <Route path="updateform/languages" element={<UpdateForm title="Languages" />} />
            <Route path="updateform/nptel" element={<UpdateForm title="NPTEL" />} />
          </Route>
          <Route path="/faculty" element={<FacultyLayout />}>
            <Route index element={<FacultyHome />} />   
            <Route path="approval" element={<Approval />}/>       
          </Route>
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/student/:id" element={<StudentDetails />} />  {/* Student details page */}
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

reportWebVitals();
