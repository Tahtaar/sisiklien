import React, { useState, useContext } from 'react';
import { StudentContext } from '../context/StudentContext';
import { useDispatch } from 'react-redux';
import { addStudent } from '../redux/actions';

const StudentForm = () => {
  const [nim, setNim] = useState('');
  const [name, setName] = useState('');
  const { addStudentToList } = useContext(StudentContext);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = { nim, name };
    addStudentToList(newStudent);
    dispatch(addStudent(newStudent));
    setNim('');
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="mb-3">
        <label className="form-label">NIM</label>
        <input
          type="text"
          className="form-control"
          value={nim}
          onChange={(e) => setNim(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Nama</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default StudentForm;
