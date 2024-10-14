import React, { useState, useEffect } from 'react';

const StudentForm = ({ addStudent, updateStu, editingStu }) => {
  const [student, setStudent] = useState({
    name: '',
    age: '',
    grade: 'A',
    status: 'active',
  });

  useEffect(() => {
    if (editingStu) {
      setStudent(editingStu);
    }
  }, [editingStu]);

  const SubmitHandle = (e) => {
    e.preventDefault();
    if (editingStu) {
      updateStu(student);
    } else {
      addStudent(student);
    }
    setStudent({ name: '', age: '', grade: 'A', status: 'active' });
  };

  return (
    <form onSubmit={SubmitHandle} className="mb-4 bg-white p-4 rounded shadow-md">
      <div className="mb-2">
        <input
          type="text"
          value={student.name}
          onChange={(e) => setStudent({ ...student, name: e.target.value })}
          placeholder="Enter Student Name"
          className="border p-2 w-full rounded"
          required
        />
      </div>
      <div className="mb-2">
        <input
          type="number"
          value={student.age}
          onChange={(e) => setStudent({ ...student, age: e.target.value })}
          placeholder="Enter Age"
          className="border p-2 w-full rounded"
          required
        />
      </div>
      <div className="mb-2">
        <select
          value={student.grade}
          onChange={(e) => setStudent({ ...student, grade: e.target.value })}
          className="border p-2 w-full rounded"
        >
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="F">F</option>
        </select>
      </div>
      <div className="mb-2">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={student.status === 'active'}
            onChange={(e) =>
              setStudent({
                ...student,
                status: e.target.checked ? 'active' : 'inactive',
              })
            }
            className="mr-2"
          />
          Active
        </label>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
      >
        {editingStu ? 'Update Student' : 'Add Student'}
      </button>
    </form>
  );
};

export default StudentForm;
