import React, { createContext, useState } from 'react';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  const addStudentToList = (student) => {
    setStudents([...students, student]);
  };

  const removeStudentFromList = (nim) => {
    setStudents(students.filter((student) => student.nim !== nim));
  };

  return (
    <StudentContext.Provider value={{ students, addStudentToList, removeStudentFromList }}>
      {children}
    </StudentContext.Provider>
  );
};
