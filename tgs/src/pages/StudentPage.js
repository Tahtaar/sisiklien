import React from 'react';
import StudentForm from '../components/StudentForm';
import StudentTable from '../components/StudentTable';

const StudentPage = () => {
  return (
    <div className="container">
      <h1>Student Page</h1>
      <StudentForm />
      <StudentTable />
    </div>
  );
};

export default StudentPage;
