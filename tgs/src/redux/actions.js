export const addStudent = (student) => ({
    type: 'ADD_STUDENT',
    payload: student
  });
  
  export const removeStudent = (nim) => ({
    type: 'REMOVE_STUDENT',
    payload: nim
  });
  