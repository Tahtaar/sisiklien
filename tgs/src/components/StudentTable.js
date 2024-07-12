import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';
import { useDispatch, useSelector } from 'react-redux';
import { removeStudent } from '../redux/actions';

const StudentTable = () => {
  const { students, removeStudentFromList } = useContext(StudentContext);
  const reduxStudents = useSelector((state) => state.students);
  const dispatch = useDispatch();

  const handleRemove = (nim) => {
    removeStudentFromList(nim);
    dispatch(removeStudent(nim));
  };

  return (
    <div>
      <h3>Student List</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>NIM</th>
            <th>Nama</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {reduxStudents.map((student, index) => (
            <tr key={index}>
              <td>{student.nim}</td>
              <td>{student.name}</td>
              <td>
                <button 
                  className="btn btn-danger"
                  onClick={() => handleRemove(student.nim)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
